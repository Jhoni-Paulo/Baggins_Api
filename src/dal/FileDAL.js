import { File } from "../app/models"

class FileDAL{

  async createFile(file){  
    try {
      return await File.create(file)
    } catch (error) {
      throw error
    }
  }
  
}

export default new FileDAL()