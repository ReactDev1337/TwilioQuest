import sys

def add(x: int, y: int):
    z = x + y

    if z <= 0:
        print("You have chosen the path of destitution.")
    elif z in range(1, 101):
        print("You have chosen the path of plenty.")
    else:
        print("You have chosen the path of excess.")
    
    return z

add(int(sys.argv[1]), int(sys.argv[2]))