from time import sleep
import subprocess
import sys
from subprocess import PIPE

print('[+] Loading tests...')
tests = []
for i in range(4):
    test = open('C:\\Users\\bkv\\Desktop\\PO\\Lab1\\tests\\' + str(i + 1) + '.txt').read()
    tests.append(test)
sleep(1)
print('[OK] Loaded')


print('[+] Loading answers...')
answers = []
for i in range(4):
    answer = open('C:\\Users\\bkv\\Desktop\\PO\\Lab1\\answers\\' + str(i + 1) + '.txt').read()
    answers.append(answer)
sleep(1)
print('[OK] Loaded')

print('[+] Starting test cases...')
for i in range(4):
    #print(tests[i])
    result = subprocess.run(["C:\\Users\\bkv\\AppData\\Local\\Programs\\Python\\Python39\\python.exe",
     "C:\\Users\\bkv\\Desktop\\PO\\Lab1\\sum.py"], input=tests[i].encode(), stdout=PIPE)
    result = result.stdout.decode()[:-2]
    #print(repr(result), repr(answers[i]))
    if (answers[i] == result):
        print("[OK] Test " + str(i + 1))
    else:
        print("[BAD] Test " + str(i + 1))