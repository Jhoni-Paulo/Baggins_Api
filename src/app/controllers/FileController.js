import { FileBLL } from "../../bll"

class FileController{

  async post(req, res) {
    
    try {
      const file = await FileBLL.createFile(req.file)
      return res.json(file)
    } catch (error) {
      return res.status(400).json(error)  
    }    
  }

}
export default new FileController()