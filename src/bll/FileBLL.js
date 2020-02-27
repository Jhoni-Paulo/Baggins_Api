import FileDAL from "../dal/FileDAL"

class FileBLL{

  async createFile(file){    

    try {
      const { originalname: name, filename: path } = file
      
      return FileDAL.createFile({name,path})
    } catch (error) {
      throw error
    }
  }
  
}

export default new FileBLL()