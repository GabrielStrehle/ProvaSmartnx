const postServ = require("..//services/post.service");

const getAll = async (_req, res) => {
  try {
    const posts = await postServ.getAll();
    return res.status(200).json(posts);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Ocorreu um erro" });
  }
};

const getId = async (req, res) => {
  try {
    const id = req.params.id; // Acessar a propriedade id de req.params
    const post = await postServ.getId(id);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const postCreate = async (req, res) => {
  try {
    const { title, content } = req.body; // Extrair title e content do corpo da requisição
    const post = await postServ.postCreate(title, content);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const postDelete = async (req, res) => {
  try {
    const id = req.params.id; // Acessar a propriedade id de req.params
    await postServ.postDelete(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  getId,
  postCreate,
  postDelete,
};
