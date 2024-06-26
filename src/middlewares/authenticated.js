import jwt from "jsonwebtoken";

const verify = async (req, res, next) => {
  let token;
  token = req.cookies.jwt;
  // console.log(token);

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded)
      req.user = decoded;
      console.log(req.user);
      next();
    } catch (error) {
      res.status(401).json({ 
        success: false,
        message: "Not authorized, token failed" 
      });
    }
  } else {
    res.status(401).json({ 
      success: false,
      message: "Not authorized, no token" 
    });
  }
};

const roleAuthorization = (roles) => {
  return (req, res, next) => {
      if (roles.includes(req.user.role) ) {
          next();
      } else {
          res.status(403).json({ 
            success: false,
            message: "Not authorized to access this route" 
          });
      }
  };
};

export { verify, roleAuthorization };
