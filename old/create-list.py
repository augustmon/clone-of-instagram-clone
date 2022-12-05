# import OS module
import os


def get_files(): 

    # Get the list of all files and directories
    path = "assets/status"
    dir_list = os.listdir(path)

    print("Files and directories in '", path, "' :")
    # prints all files
    # print(dir_list)
    
    return dir_list


get_files() 