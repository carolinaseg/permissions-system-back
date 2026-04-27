export const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err.code === "P2002") {
    return res.status(400).json({
      error: "Resource already exists",
    });
  }

    if (err.type === "NOT_FOUND") {
    return res.status(404).json({
      error: "Resource not found",
    });
  }

  return res.status(500).json({
    error: "Internal server error",
  });
};