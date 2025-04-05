import os

num_of_files = int(input("Enter number of files : "))
folder_name = input("Enter the folder name : ")

if folder_name and not os.path.exists(folder_name):
    os.makedirs(folder_name)
    
if folder_name:
    try:
        os.chdir(folder_name) 
    except FileNotFoundError:
        print(f"Folder '{folder_name}' not found.")
        exit()


for i in range(num_of_files):
    try:
        with open(f"assign{i+1}.js", 'x'):
            print(f"Created assign{i+1}.js")
            
    except:
        print(f"assign{i+1}.js already exists")
        
    
input("Press Enter to exit")