const errorWrapper = (controller) => {
  return (req, res, err) => {
    try {
      controller(req, res);
    } catch (err) {
      return res.status(500).json(err);
    }
  };
};

export default errorWrapper;
