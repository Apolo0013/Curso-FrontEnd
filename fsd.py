fds = '''#4DA3FF
#5AB0FF
#66BCFF
#73C8FF
#80D4FF
#8DE0FF
#9AEAFF
#A7F3FF'''

string  = ''
for n,i in enumerate(fds.split('\n')): 
    string += f"""div:nth-child() {{
            animation: scale-minmax 0.5s ease-in-out;
            animation-delay: 0.2s;
        }}
"""
print(string)