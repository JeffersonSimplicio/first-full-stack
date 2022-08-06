// Com isso não é necessário usar biblioteca externar para tratamento de erros.
const rescue = action => async (req, res, next) => {
  try {
    await action(req, res, next);
  } catch(err) {
    next(err);
  }
}

module.exports = rescue;
