"""
PEP 8
"""
    # stands for Python Enhacnemnt Proposal 8
    # PEP 8 is a style guide document that provides guidelines and best
    # practices on how to write Python code.
    # https://www.python.org/dev/peps/pep-0008/#package-and-module-names
    # improves readability of code and user-friendly code

    # saving a file should be lowercase, and separated by underscores when needed.
    my_module.py

    # 79 is the maximum number of characters in a line

    # regular variables should be lowercase, and separated by underscores when needed.
    # Never use l, O, I as a single-letter name for anything.
    age = 3
    first_name = "grant"

    # constants should be uppercase, and separated by underscores when needed
    PI = 3.14
    GRAVITATIONAL_ACCELERATION = 9.81

    # function names should be lowercase, and separated by underscores when
    # needed, and should have two lines before
    def function():
        pass
    def my_function():
        pass
    # factory functions return objects(instances of classes) and their names
    # should capitalize the first letter of each word
    def FactoryFunction():
        return MyClass

    # class names should capitalize the first letter of each word
    class MyClass:
        pass

    # conflicting names with keywords, suffix an underscore
    for_ = 123


"""
VARIABLES
"""

    # variables can change data types
    # single and double quotes are the same
    # variables are case-sensitive
    # variables must start with letter or underscore, and can only contain A-z, 0-9, and _
    X = 2
    x = 6
    x = "Hello World"

    x = str(3)          # x will be '3'
    x = str(True)       # x will be 'True'

    # int rounds down
    y = int(3)          # y will be 3
    y = int(3.1)        # y will be 3
    y = int(3.9)        # y will be 3
    y = int("3.9")      # error
    y = int("39")       # y will be 39
    y = int("-39")      # y will be -39

    z = float(3)        # z will be 3.0



    # use type(variableName) to return its data type
    x = ""
    y = 2
    z = 3.0
    print(type(x))  # will return <class 'str'>
    print(type(y))  # will return <class 'int'>
    print(type(z))  # will return <class 'float'>



    # assign multiple variables in one line with respective order
    x, y, z = 3, "hi", 2
    # assign multiple variables with the same value
    x = y = z = "hello"
    # unpack values in a list, but the number of items must equal number of variables
    numbers = [1,2,3]
    x, y, z = numbers



    # printing variables concatenates strings and adds numbers
    a = "Python is"
    b = "cool"
    c = 2
    d = 3
    print(a+" "+b)  # will return "Python is cool"
    print(c+d)  # will return 5
    # to combine strings and numbers, turn the numbers into str
    print(a+" "+b+str(c+d))     # will return "Python is cool5"



    # global variables and local variables
    x = "awesome"

    def xInFunctionIsGlobal():
        return("Python is " + x)
    print(xInFunctionIsGlobal())    # will print "Python is awesome"

    def local():
        x = "hello"
        return("Python is " + x)
    print(local())    # will print "Python is hello"

    # to change a global variable within a function, reference to global variable using "global"
    def referenceGlobal():
        global x
        x = "fantastic"
    referenceGlobal()
    print(x)    # will print "fantastic"







"""
Data Types
"""



    """
    Text Type:	str
    Numeric Types:	int, float, complex
    Sequence Types:	list, tuple, range
    Mapping Type:	dict
    Set Types:	set, frozenset
    Boolean Type:	bool
    Binary Types:	bytes, bytearray, memoryview
    """


    """
    TEXT TYPE
    """
        # String
            x = "String"
            # to cast to string use str(variableName)

            # String Methods
                # prints the character at index 1 which is "t"
                print(x[1])

                # loops through the word "String" i being characters in x
                for i in x:
                    print(i)

                # len() returns length of string
                print(len(x))   # returns 6

                # slicing strings (substrings)
                print(x[1:3])   # prints characters from index 1(inclusive) to 3(non-inclusive)
                print(x[:2])    # prints characters from start to index 2(non-inclusive)
                print(x[3:])    # prints characters from index 3(inclusive) to the end

                # replacing a string with another string
                print(x.replace("Str", "a"))    # prints "aing"

                # splits a string into substrings based on instances of separator
                a = "Hello, World, !"
                b = a.split(",")
                print(b)    # will print ['Hello', ' World', ' !']

                # find(subString) returns the index of the substring within another string
                s = "hello"
                s.find("lo")    # returns 3
                s.find("s")     # returns -1

                # count(subString) returns the number of times a substring appears within another string
                s = "hello"
                s.count("l")    # returns 2
                s.count("ll")   # returns 1
                s.count("s")    # returns 0

                # returns a string in upper case and lower
                print(x.upper())
                print(x.lower())

                # removes white space before and after a string
                print(x.strip())

                # format strings
                quantity = 3
                itemno = 567
                price = 49.95
                myorder = "I want {} pieces of item {} for {} dollars."
                print(myorder.format(quantity, itemno, price))  # prints "I want 3 pieces of item 567 for 49.95 dollars."

                # the keyword "in" returns true if a word is in another word, and false otherwise
                print("i" in x)     # will print True
                if "i" in x:
                    print("i is in x")  # will be printed since condition is True

                # the keyword "not in" returns true if a word is not in another word, and true otherwise
                print("x" in x)     # will print False

                # escape characters
                """
                    Code    Result
                    \'	    Single Quote
                    \\	    Backslash
                    \n	    New Line
                    \t	    Tab
                    \b	    Backspace   (erases one character before the \b)
                    \f	    Form Feed
                """


    """
    NUMERIC TYPES
    """
        # int
            x = 2
            # a whole number, positive or negative, without decimals
            # to cast to int use int(variableName)
        # float
            x = 2.2
            # a number, positive or negative, containing one or more decimals.
            # x = 2.0 is also a float
            # x = 37.6e100 can be used where e means *10^
            # to cast to float use float(variableName)
        # complex
            x = 1+1j
            # rectangular form but j instead of i
            # to cast to complex use complex(variableName)
            print((3+1j)*(2+2j))    # prints 4+8j which is the simplified form of (3+1j)*(2+2j)


    """
    SEQUENCE TYPES
    """
        # list
            x = [1, "string",3]
            # List items are ordered, changeable (mutable), and allow duplicate values
            # Ordered means that the items have a defined order, and that order will not change, new items are added at the end of the list
            # Changeable(mutable) means that we can change, add, and remove items in a list after it has been created.
            # Since lists are indexed, lists can have items with the same value
            # list items can be of any data type
            # lists can contain items with different data types
            # ex: thislist = ["apple", 3, "cherry", "apple", "cherry"]


            # list[i] obtains the i-th element in the list, index-0
            # O(1) time
            print(x[2])     # will print 3

            # list[i]=a changes the i-th item's value to a
            # O(1) time
            list[1] = 2
            print(list)     # will print [1,2,3]

            # use len(list) to determine length of list
            # O(1) time
            print(len(x))   # will print 3

            # count(searchItem) will return the number of items within a list that equal the searchItem
            vowels = ['a', 'e', 'i', 'o', 'i', 'iii']
            print(vowels.count('i'))   # will return 2


            # sub-lists
                # list[a:b] will return a sub-list from index a (inclusive) to b (non-inclusive), index 0
                # O(b-a) time
                thisList = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
                print(thisList[2:5])        # will print ['cherry', 'orange', 'kiwi']

                # list[:a] will return a sub-list from the start to the a-th item (non-inclusive), index 0
                # O(a) time
                print(thisList[:4])         # will print ["apple", "banana", "cherry", "orange"]

                # list[a:] will return a sub-list from the a-th item (inclusive) to the end, index 0
                # O(len(list)-a) time
                print(thisList[2:])         # will print ["cherry", "orange", "kiwi", "melon", "mango"]

            # list[a:b] = [1,2,..x] will replace the items between the a-th item (inclusive) and b-th item (non-inclusive) with the new list
            # note that b-a does not have to equal x, and if b-a!=x, then the the list's length will change
            # O(n) time
            thislist = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
            thislist[1:3] = ["blackcurrant", "watermelon","blackcurrant"]
            print(thislist)     # will print ['apple', 'blackcurrant', 'watermelon', 'blackcurrant', 'orange', 'kiwi', 'mango']

            # insert items using list.insert(index, value)
            # O(n) time
            thislist = ["apple", "banana", "cherry"]
            thislist.insert(2, "watermelon")
            print(thislist)     # will print ["apple", "banana","watermelon", "cherry"]

            # add an item to end of list using append()
            # O(1) time
            thislist = ["apple", "banana", "cherry"]
            thislist.append("orange")
            print(thislist)     # will print ["apple", "banana", "cherry", "orange"]

            # append any iterable object (lists, tuples, sets, dictionaries etc.) with extend() method
            # O(len(addedIterable)) time
            thislist = ["apple", "banana", "cherry"]
            thistuple = ("kiwi", "orange")
            thislist.extend(thistuple)
            print(thislist)     # will print ['apple', 'banana', 'cherry', 'kiwi', 'orange']

            # the remove() method removes the first instance of a specified item
            # O(n) time
            thislist = ["apple", "banana", "banana", "cherry"]
            thislist.remove("banana")
            print(thislist)     # will print ['apple', 'banana', 'cherry']

            # the pop(i) method removes the i-th index
            # O(n-i) time
            thislist = ["apple", "banana", "cherry"]
            thislist.pop(1)
            print(thislist)     # will print ['apple', 'cherry']

            # if you do not specify the index, the pop() method removes the last item
            # O(1) time
            thislist = ["apple", "banana", "cherry"]
            thislist.pop()
            print(thislist)     # will print ['apple', "banana"]

            # the clear() method empties the list
            # the list still remains, but it has no content
            # O(1) time
            thislist = ["apple", "banana", "cherry"]
            thislist.clear()
            print(thislist)     # will print []

            # swapping indexes
            thislist = [1,2,3,4,5,6,7]
            thislist[4], thislist[2] = thislist[2],thislist[4] # swaps the 4th and 2nd index elements
            print(thislist)     # will print [1, 2, 5, 4, 3, 6, 7]

            # use keyword "in" to check if an item is within a list
            # O(n) time, linearly searches list
            print("a" in thisList)      # will print True

            # use type(list) to determinee the data type
            print(type(x))  # will print <class 'list'>

            # method list() takes sequence types and converts them to lists. This is used to convert a given tuple into list
            # O(len(num)) time
            tuple = (123, 'xyz', 'zara', 'abc');
            list = list(tuple)
            print(list)     # will print [123, 'xyz', 'zara', 'abc']

            # looping lists
                # the following all iterate through the list and prints its items
                thislist = ["apple", "banana", "cherry"]
                for x in thislist:
                    print(x)

                for i in range(len(thislist)):
                    print(thislist[i])

                i = 0
                while i < len(thislist):
                    print(thislist[i])
                    i = i + 1

            # list comprehension
                # list comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list
                # the return value is a new list, leaving the old list unchanged
                newlist = [*expression* for *item* in *iterable* if *condition* == True]

                fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

                newlist = [x for x in fruits]
                print(newlist)      # will print ['apple', 'banana', 'cherry', 'kiwi', 'mango']

                newlist = [x.upper() for x in fruits if "a" in x]
                print(newlist)      # will print ['APPLE', 'BANANA', 'MANGO']

                newlist = [x.upper() if x != "banana" else "orange" for x in fruits]
                print(newlist)      # will print ['APPLE', 'orange', 'CHERRY', 'KIWI', 'MANGO']
                # The expression in the example above says:"Return the item.upper() if it is not banana, if it is banana return orange".

            # sorting lists
                # O(nlogn) time
                thislist.sort()     # sorts the list alphanumerically, ascending, and is case sensitive (capital sorted before lower case). list must be all numbers or all strings
                thislist.sort(reverse = True)      # sorts the list alphanumerically, descending, list must be all numbers or all strings
                thislist.sort(key = str.lower)      # sorts list alphanumerically, ascending, and is not case sensitive

            # custom sort
                # use the keyword argument key = function
                def myfunc(n):
                  return abs(n - 50)
                thislist = [100, 50, 65, 82, 23]
                thislist.sort(key = myfunc)

            # reverse()
                # O(n) time
                thislist = ["banana", "Orange", "Kiwi", "cherry"]
                thislist.reverse()
                print(thislist)     # will print ['cherry', 'Kiwi', 'Orange', 'banana']

            # min()
                # O(n) time
                thislist = ["banana", "Orange", "Kiwi", "cherry"]
                print(min(thislist))    # will print "Kiwi"

            # max()
                # O(n) time
                thislist = ["banana", "Orange", "Kiwi", "cherry"]
                print(min(thislist))    # will print "cherry"

            # copy lists
                # You cannot copy a list simply by typing list2 = list1, because: list2 will only be a reference to list1, and changes made in list1 will automatically also be made in list2.
                # use copy()
                # O(n) time
                thislist = ["apple", "banana", "cherry"]
                mylist = thislist.copy()
                print(mylist)       # will print ['apple', 'banana', 'cherry']

            # deletes the list, it is not empty, there is no list
            del thisList


        # tuple
            thistuple = ("apple", "banana", 3, "apple", "cherry")
            # tuple items are ordered, unchangeable(immutable), and allow duplicate values
            # items have a defined order, and that order will not change
            # we cannot change, add or remove items after the tuple has been created. unchangeable also means immutable
            # since tuples are indexed, they can have items with the same value
            # time complexity is the same as lists

            thistuple = ("orange",)     # if the tuple has only 1 item, make sure to a comma after the item

            thistuple[a]                # access tuple item at index a, index 0

            thistuple[a:b]              # returns sub-tuple from index a(inclusive) to b(non-inclusive)
            thistuple[:a]               # returns sub-tuple from start to a-th index (non-inclusive)
            thistuple[a:]               # returns sub-tuple from a-th index (inclusive) to end

            "a" in thistuple            # returns True if "a" is an item in the tuple

            # change/add/remove tuple values by converting it to list, change value, then back to tuple
            thistuple = ("apple", "banana", "cherry")
            y = list(thistuple)
            y.append("orange")
            thistuple = tuple(y)

            # delete the tuple completely
            del thistuple

            # packing a tuple is when a we create a tuple and assign values to it
            fruits = ("apple", "banana", "cherry")

            # unpacking a tuple is when we assign each item in a tuple to a distinct variable

            fruits = ("apple", "banana", "cherry")
            (green, yellow, red) = fruits       # green = "apple", yellow = "banana", red = "cherry"

            # the number of variables must match the number of values in the tuple, if not asterisk must be used which makes one of the variables a list
            fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")
            (green, yellow, *red) = fruits      # green = "apple", yellow = "banana", red = ['cherry', 'strawberry', 'raspberry']
            (green, *tropic, red) = fruits      # green = "apple", tropic = ['mango', 'papaya', 'pineapple'], red = "cherry"

            # loop through a tuple
                # all the following do the same thing, print each item in the tuple
                thistuple = ("apple", "banana", "cherry")
                for x in thistuple:
                    print(x)

                thistuple = ("apple", "banana", "cherry")
                for i in range(len(thistuple)):
                    print(thistuple[i])
                    thistuple = ("apple", "banana", "cherry")
                    i = 0
                while i < len(thistuple):
                    print(thistuple[i])
                    i = i + 1

            # joining tuples
            tuple1 = ("a", "b" , "c")
            tuple2 = (1, 2, 3)
            tuple3 = tuple1 + tuple2    # tuple 3 is ('a', 'b', 'c', 1, 2, 3)

            # multiply tuples
            fruits = ("apple", "banana", "cherry")
            mytuple = fruits * 2        # mytuple is ('apple', 'banana', 'cherry', 'apple', 'banana', 'cherry')

        # range
            x = range(6)
            # Sequence of numbers, x = range(6) creates the sequence: 0,1,2,3,4,5
            # syntax:   range(start, stop, step)
            # start	Optional. An integer number specifying at which position to start. Default is 0
            # stop	Required. An integer number specifying at which position to stop (not included)
            # step	Optional. An integer number specifying the incrementation. Default is 1



    """
    MAPPING TYPE
    """
        # dictionary
            thisdict = {
                "brand": "Ford",
                "model": "Mustang",
                "year": 1964
            }
            # Dictionary items are presented in key:value pairs, and can be referred to by using the key name
            # Dictionary items are ordered, changeable, and doesn't allow duplicates
            # Dictionary items can be of any data type
            print(thisdict)     # will print {'brand': 'Ford', 'model': 'Mustang', 'year': 1964}
            type(thisdict)      # will return <class 'dict'>
            # Since no duplicates, dictionaries cannot have two items with the same key
            thisdict = {
              "brand": "Ford",
              "model": "Mustang",
              "year": 1964,
              "year": 2020,
              "year": 2021
            }
            print(thisdict)     # will print {'brand': 'Ford', 'model': 'Mustang', 'year': 2021}, notice they key "year" has a pair value of 2021 which is the last value

            # to determine how many items a dictionary has, use the len() function:
            thisdict = {
              "brand": "Ford",
              "model": "Mustang",
              "year": 1964
            }
            len(thisdict)       # will return 3

            # Access Items
                # reference the key names to access items
                # O(1) time complexity
                thisdict = {
                  "brand": "Ford",
                  "model": "Mustang",
                  "year": 1964
                }
                x = thisdict["model"]       # will print "Mustang"

                # get(keyName)to access items
                # O(1) time complexity
                x = thisdict.get("model")   # will print "Mustang"

                # keys() method will return a list of all the keys in the dictionary
                # keys() is a view of the dictionary, meaning that any changes done to the dictionary will be reflected in the keys list
                # O(1) time complexity
                car = {
                  "brand": "Ford",
                  "model": "Mustang",
                  "year": 1964
                }
                x = car.keys()
                print(x)    # will print dict_keys(['brand', 'model', 'year'])
                car["color"] = "white"
                print(x)    # will print dict_keys(['brand', 'model', 'year', 'color'])

                # values() method will return a list of all the values in the dictionary.
                # key() is a view of the dictionary, meaning that any changes done to the dictionary will be reflected in the values list
                # O(1) time complexity
                car = {
                "brand": "Ford",
                "model": "Mustang",
                "year": 1964
                }
                x = car.values()
                print(x)    # will print dict_values(['Ford', 'Mustang', 1964])
                car["year"] = 2020
                print(x)    # will print dict_values(['Ford', 'Mustang', 2020])

                # items() method will return each item in a dictionary, as tuples in a list
                # items() is a view of the items of the dictionary, meaning that any changes done to the dictionary will be reflected in the items list.
                car = {
                "brand": "Ford",
                "model": "Mustang",
                "year": 1964
                }
                x = car.items()
                print(x)    # dict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 1964)])
                car["year"] = 2020
                print(x)    # dict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 2020)])

                # use in keyword to check if a specified key is present in a dictionary
                # O(1) time complexity
                thisdict = {
                  "brand": "Ford",
                  "model": "Mustang",
                  "year": 1964
                }
                "model" in thisdict     # will return True


            #Change/Add Items
                # change the value of a specific item by referring to its key name
                # key is not present in the dict, it will add a new key:value pair
                # O(1) time
                thisdict["year"] = 2018
                thisdict["color"] = "red"

                # update() method will update the dictionary with the items from the given argument, argument  must be an iterable object with key:value pairs like a dictionary
                # if argument's key is not present in the dict, it will add a new key:value pair
                thisdict.update({"year": 2020})

            # Remove Items
                # pop() method removes the item with the specified key name
                # O(1) time complexity
                thisdict = {
                  "brand": "Ford",
                  "model": "Mustang",
                  "year": 1964
                }
                thisdict.pop("model")
                print(thisdict)     # will print {'brand': 'Ford', 'year': 1964}

                # popitem() method removes the last inserted item
                # O(1) time complexity
                thisdict = {
                  "brand": "Ford",
                  "model": "Mustang",
                  "year": 1964
                }
                thisdict.popitem()
                print(thisdict)     # will print {'brand': 'Ford', 'model': 'Mustang'}

                # del keyword to remove items
                # O(1) time complexity
                del thisdict["model"]

                # del keyword to completely remove dictionary
                del thisdict

                # clear() empties a dictionary
                thisdict.clear()

            # Loop Dictionaries
                thisdict =	{
                  "brand": "Ford",
                  "model": "Mustang",
                  "year": 1964
                }

                # prints all keys names in a dictionary
                for x in thisdict:
                    print(x)
                for x in thisdict.keys():
                    print(x)
                """
                both print the following:
                brand
                model
                year
                """

                # print all values in the dictionary
                for x in thisdict:
                    print(thisdict[x])
                for x in thisdict.values():
                    print(x)
                """
                both print the following:
                Ford
                Mustang
                1964
                """

                # Loop through both keys and values, by using the items() method
                for x, y in thisdict.items():
                  print(x)
                  print(y)
                """
                prints the following:
                brand
                Ford
                model
                Mustang
                year
                1964
                """

            # Copying Dictionaries
                # You cannot copy a dictionary simply by typing dict2 = dict1, because: dict2 will only be a reference to dict1, and changes made in dict1 will automatically also be made in dict2.

                # copy() makes a copy of a dictionary
                # O(n) time complexity
                mydict = thisdict.copy()

                # dict() makes a copy of a dictionary
                # O(n) time complexity
                mydict = dict(thisdict)

            # Nested Dictionaries
                # A dictionary can contain dictionaries, this is called nested dictionaries
                myfamily = {
                  "child1" : {
                    "name" : "Emil",
                    "year" : 2004
                  },
                  "child2" : {
                    "name" : "Tobias",
                    "year" : 2007
                  },
                  "child3" : {
                    "name" : "Linus",
                    "year" : 2011
                  }
                }

                # Create three dictionaries, then create one dictionary that will contain the other three dictionaries:
                child1 = {
                  "name" : "Emil",
                  "year" : 2004
                }
                child2 = {
                  "name" : "Tobias",
                  "year" : 2007
                }
                child3 = {
                  "name" : "Linus",
                  "year" : 2011
                }

                myfamily = {
                  "child1" : child1,
                  "child2" : child2,
                  "child3" : child3
                }

    """
    SET TYPES
    """
        # set
            thisset = {"apple", 3, "cherry"}

        # a set is a collection which is both unordered, unindexed, unchangeable, and do not allow duplicate values.
        # sets are unordered, so you cannot be sure in which order the items will appear, set items can appear in a different order every time you use them
        # once a set is created, you cannot change its items, but you can add new items.
        # sets cannot have duplicate items
        print(thisset)  # will only print {3, 'cherry', 'apple'}
        type(thisset)   # will return <class 'set'>
        del thisset     # will delete the set

        # len() returns length of the set
        # O(1) time
        len(thisset)    # will return 3 since apple is a duplicate

        # adding items/joinging sets
            # O(1) time
                thisset.add("orange") # add one item to set

            # update() is used to add items from any iterable object (list, tuples, dictionaries, etc) to another set
            # O(m) time where m is the length of the added iterable object
            thisset = {"apple", "banana", "cherry"}
            tropical = {"pineapple", "mango", "banana"}
            thisset.update(tropical)    # adds topical items to thisset items, duplicates will be removed

            # the union() method that returns a new set containing all items from both sets
            # O(len(s)+len(t)) time complexity where s and t are the two sets
            set1 = {"a", "b" , 3}
            set2 = {1, 2, 3}
            set3 = set1.union(set2)     # set 3 will be {'a', 'c', 1, 2, 'b'}, duplicates will be removed

            # Keep ONLY the Duplicates
                # intersection_update() method will keep only the items that are present in both sets
                # O(len(s)+len(t)) time complexity where s and t are the two sets
                x = {"apple", "banana", "cherry"}
                y = {"google", "microsoft", "apple"}
                x.intersection_update(y)
                print(x)    # will print {"apple"}

                # intersection() method will return a new set, that only contains the items that are present in both sets.
                # O(len(s)+len(t)) time complexity where s and t are the two sets
                x = {"apple", "banana", "cherry"}
                y = {"google", "microsoft", "apple"}
                z = x.intersection(y)
                print(z)    # will print {"apple"}`

            # Keep All, But NOT the Duplicates
                # symmetric_difference_update() method will keep only the elements that are NOT present in both sets
                # O(len(s)+len(t)) time complexity where s and t are the two sets
                x = {"apple", "banana", "cherry"}
                y = {"google", "microsoft", "apple"}
                x.symmetric_difference_update(y)
                print(x)    # will print {"banana", "cherry", "google", "microsoft"}

                # symmetric_difference() method will return a new set, that contains only the elements that are NOT present in both sets.
                # O(len(s)+len(t)) time complexity where s and t are the two sets
                x = {"apple", "banana", "cherry"}
                y = {"google", "microsoft", "apple"}
                z = x.symmetric_difference(y)
                print(z)    # will print {"banana", "cherry", "google", "microsoft"}

        # remove(item) and discard(item) removes an item from the set
        # remove and discard do the same thing, but remove will raise an error if the item to remove() does not exits, but discard() wil not
        # both remove() and discard() have O(1) time complexity
        thisset = {"apple", "banana", "cherry"}
        thisset.remove("banana")        # set now has {"cherry", "apple"}

        # pop() removes the last item in a set, but sets are unordered, so you do not know which item that gets removed
        # O(1) time complexity
        x = thisset.pop()

        # clear() empties the set
        # O(1) time complexity
        thisset = {"apple", "banana", "cherry"}

        # set() Constructor
        # O(m) time complexity where m is the number of items to be included within the set
        thisset = set(("apple", "banana", "cherry")) # note the double round-brackets

        # access items
            # cannot refer to an item through an index, but can loop through all the items
            thisset = {"apple", "banana", "cherry"}
            for x in thisset:
                print(x)

        # in keyword
        # O(1) time
        "banana" in thisset     # will return true of banana is an item within the set


    """
    BOOLEAN TYPE
    """
        # boolean
            x = True

            # the isinstance() function determines if an object is of a certain data type:
            x = 200
            print(isinstance(x, int))   # prints True

            # bool() returns True for all inputs except the following which are False
            bool(False)
            bool(None)
            bool(0)
            bool("")
            bool(())
            bool([])
            bool({})
            # bool() returns False if you have an object that is made from a class with a __len__ function that returns 0 or False:
            class myclass():
              def __len__(self):
                return 0

            myobj = myclass()
            print(bool(myobj))  # prints False


"""
User Input
"""
    # the user input will always be a string
    username = input("Enter username:")



"""
Random Number
"""

    #random float values
        from random import random
        print(random())     #random number in the interval [0,1)

    #random integer values
        from random import randint
        x = randint(1, 10)  # randomly generates an integer between 1 and 10 (inclusive)
        print(x)





"""
Operators
"""

    # Arithmetic Operators
        """
            Operator        Name
            +	            Addition
            -	            Subtraction
            *	            Multiplication
            /	            Division
            %	            Modulus
            **	            Exponentiation
            //	            Floor division
        """

    # Assignment Operators
        """
            Operator        Example             Same As
            =	            x = 5	            x = 5
            +=	            x += 3	            x = x + 3
            -=	            x -= 3	            x = x - 3
            *=	            x *= 3	            x = x * 3
            /=	            x /= 3	            x = x / 3
            %=	            x %= 3	            x = x % 3
            //=	            x //= 3	            x = x // 3
            **=	            x **= 3	            x = x ** 3
        """

    # Comparison Operators
        """
            Operator        Name
            ==	            Equal
            !=	            Not equal
            >	            Greater than
            <	            Less than
            >=	            Greater than or equal to
            <=	            Less than or equal to
        """


    # Logical Operators
        """
            Operator	    Description
            and 	        Returns True if both statements are true	x < 5 and  x < 10
            or	            Returns True if one of the statements is true	x < 5 or x < 4
            not	            Reverse the result, returns False if the result is true
        """



"""
Conditions and If Statements
"""

    # keywords: a==b, a!=b, a<b, a>b, a<=b, a>=b, or, and

    # if, elif, else
    a = 33
    b = 33
    if b > a:
        print("b is greater than a")
    elif a == b:
        print("a and b are equal")
    else:
        print("a is greater than b")

    # shorthand
        # if
        if a > b: print("a is greater than b")
        # if else
        print("A") if a > b else print("B")

    # nest if statements
    x = 41
    if x > 10:
      print("Above ten,")
      if x > 20:
        print("and also above 20!")
      else:
        print("but not above 20.")

    # pass
    # if statements cannot be empty, but if you for some reason have an if statement with no content, put in the pass statement to avoid getting an error
    a = 33
    b = 200
    if b > a:
      pass




"""
Loops
"""

    # With the break statement we can stop the loop even if the while condition is true
    i = 1
    while i < 6:
        print(i)
        if i == 3:
            break
        i += 1
    # With the continue statement we can stop the current iteration, and continue with the next
    i = 0
    while i < 6:
        i += 1
        if i == 3:
            continue
        print(i)
    # With the else statement we can run a block of code once when the condition no longer is true
    i = 1
    while i < 6:
      print(i)
      i += 1
    else:
      print("i is no longer less than 6")
    """
    Loop prints the following:
    1
    2
    3
    4
    5
    i is no longer less than 6
    """

    fruits = ["apple", "banana", "cherry"]
    for x in fruits:
        print(x)
    """
    Loop prints the following:
    "apple"
    "banana"
    "cherry"
    """

    for x in "banana":
        print(x)
    """
    Loop prints the following:
    "b"
    "a"
    "n"
    "a"
    "n"
    "a"
    """

    for x in range(6):
        print(x)
    """
    Loop prints the following:
    0
    1
    2
    3
    4
    5
    """

    # for loops cannot be empty, but if you for some reason have a for loop with no content, put in the pass statement to avoid getting an error.
    for x in [0, 1, 2]:
        pass

"""
Iterators
"""

    # An iterator is an object that can be iterated upon, meaning that you can traverse through all the values
    # Technically, in Python, an iterator is an object which implements the iterator protocol, which consist of the methods __iter__() and __next__()

    # Strings, lists, tuples, dictionaries, and sets are all iterable objects. They are iterable containers which have a iter() method which is used to get an iterator.
        mytuple = ("apple", "banana", "cherry")
        myit = iter(mytuple)

        print(next(myit))   # prints apple
        print(next(myit))   # prints banana
        print(next(myit))   # prints cherry

    # we can also use a for loop to iterate through an iterable object
        mystr = "banana"    # recall a string is an iterable object, containing a sequence of characters

        for x in mystr:
            print(x)    # prints out each character in the string on a new line

    # create an iterator
        # to create an object/class as an iterator you have to implement the methods __iter__() and __next__() to your object
        # The __iter__() method acts similar to the __init_() method, you can do operations (initializing etc.), but must always return the iterator object itself
        # The __next__() method also allows you to do operations, and must return the next item in the sequence
        # In the __next__() method, we can add a terminating condition to raise an error if the iteration is done a specified number of times:
        # To prevent the iteration to go on forever, we can use the StopIteration statement

        class MyNumbers:
          def __iter__(self):
            self.a = 1
            return self
          def __next__(self):
            if self.a <= 20:
              x = self.a
              self.a += 1
              return x
            else:
              raise StopIteration

        myclass = MyNumbers()
        myiter = iter(myclass)
        print(next(myiter))     # prints 1
        print(next(myiter))     # prints 2
        print(next(myiter))     # prints 3
        print(next(myiter))     # prints 4
        print(next(myiter))     # prints 5


"""
Functions
"""

    # name is a parameter and "grant" is an argument
    def my_function(name):
      print("Hello from "+ name)
    my_function("grant")    # prints Hello from grant

    # *args (Arbitrary Arguments)
    # if you do not know how many arguments that will be passed into your function, add a * before the parameter name in the function definition
    # *args will allow the function to receive a tuple of argument
    def my_function(*kids):
        print("The youngest child is " + kids[2])
    my_function("Emil", "Tobias", "Linus")      # will print "The youngest child is Linus"

    # *keyword arguements
    # send arguments with the key = value syntax.
    def my_function(child3, child2, child1):
        print("The youngest child is " + child3)
    my_function(child1 = "Emil", child2 = "Tobias", child3 = "Linus")   # will print "The youngest child is Linus"

    # **kwargs  (Arbitrary Keyword Arguments)
    # If you do not know how many keyword arguments that will be passed into your function, add two asterisk: ** before the parameter name in the function definition
    # This way the function will receive a dictionary of arguments, and can access the items accordingly
    def my_function(**kid):
        print("His last name is " + kid["lname"])
    my_function(fname = "Tobias", lname = "Refsnes")    # will print "His last name is Refsnes"

    # default paramter value
    # if we call the function without argument, it uses the default value
    def my_function(country = "Norway"):
        print("I am from " + country)
    my_function()   # will print "I am from Norway"
    # if we have a function with several default parameter values, the first arguement will become the first parameter, the second arguement will become the second paramter, etc
    def func(x=3, text='2'):
        print(x)
    func('4')   # the function will print '4'. To change text to equal '4', we must put one argument before it when calling the function

    #You can send any data types of argument to a function (string, number, list, dictionary etc.), and it will be treated as the same data type inside the function.
    def my_function(food):
        for x in food:
            print(x)
    fruits = ["apple", "banana", "cherry"]
    my_function(fruits)     # if fruits was an integer, an error would occur

    # return values
    def my_function(x):
        return 5 * x
    my_function(3)  # will return 15

    # pass
    # if you for some reason have a function definition with no content, put in the pass statement to avoid getting an error
    def myfunction():
        pass

    # recursion
    # must have base case
    # must approach base case
    # must call function within function
    def tri_recursion(k):
        if(k > 0):
            result = k + tri_recursion(k - 1)
            print(result)
        else:
            result = 0
        return result
    print("\n\nRecursion Example Results")
    tri_recursion(6)
    """
    Output will be the following:
    1
    3
    6
    10
    15
    21
    """

    # lambda function
        # a lambda function is a small anonymous function
        # an anonymous function is a function that is defined without a name
        # a lambda function can take any number of arguments, but can only have one expression
        # use lambda functions when an anonymous function is required for a short period of time.
        # syntax: lambda arguements: return value
        x = lambda a, b, c : a + b + c      # x doesn't have a value as of now
        print(x(5, 6, 2))   # will print 13

        # conditions within lambda functions
            func = lambda x,y: x if x>y else y
            # above says return x if x>y, else return y

        # lambda functions inside other functions
            def myfunc(n):
                return lambda a : a * n
            mydoubler = myfunc(2)   # mydoubler = a * 2
            print(mydoubler)        # prints "<function myfunc.<locals>.<lambda> at 0x2b071eb87ca0>", mydoubler doesn't actually have a value
            print(mydoubler(11))    # mydoubler(11) = 11 * 2 = 22
            mytripler = myfunc(3)   # mytripler = a * 3
            print(mytripler)        # prints "<function myfunc.<locals>.<lambda> at 0x2b071eb87f70>", mydoubler doesn't actually have a value
            print(mytripler(11))    # mytripler(11) = 11 * 3 = 33

        # map
            # applies the same function to each element of a sequence
            # returns the modified list, tuple, etc
            # syntax:   constructor(map(lambdaFunction, input))
            oldList = [1,2,3,4]
            newList = list(map(lambda x: x**2, oldList)

        # filter
            # filters items out of a sequence
            # items that make the condition True will be kept, items that make the condition False will be removed
            # return filtered list, tuple, etc
            # syntax:   constructor(filter(lambdaCondition, input))
            oldList = [1,2,3,4]
            newList = list(filter(lambda x: x%2==0, oldList))

        # reduce
            # applies same operation to items of a sequence
            # uses result of operation as first parameter of next operation
            # returns an item, not a list
            # syntax:   reduce(lambdaFunction, input)
            # import: from functools import reduce
            from functools import reduce
            list = [1,2,3,4]
            print(reduce(lambda x,y: x*y, list))    # will print 24     # 1*2=2-->2*3=6-->6*4==24


"""
File Handling
"""

    # open() opens a file and returns a file object
    # the open() function takes two parameters; filename, and mode.
    # there are 4 modes for opening a file
    # "r" for read and "t" for text are default values, so you don't need to specify them to use them

    """
    "r" - Read - Default value. Opens a file for reading, error if the file does not exist
    "a" - Append - Will append to the end of the file, creates the file if it does not exist
    "w" - Write - Will overwrite any existing content, creates the file if it does not exist
    "x" - Create - Creates the specified file, returns an error if the file exists
    """

    # additionally, specify if the file should be handled as binary or text mode
    # "t" - Text - Default value. Text mode
    # "b" - Binary - Binary mode (e.g. images)

    # read
    # specify the name of the file to open it for reading
    f = open("demofile.txt", "rt")

    # if the file is not in the same location as the python file, specify the path
    f = open("files\demofile.txt", "rt")

    # read(n) returns the first n characters within the file
    # the default read() method returns the whole text
    print(f.read(6))

    # readline() returns the first line
    # each time you call readline() again, it goes the to next line
    print(f.readline())
    print(f.readline())

    # loop through the file line by line:
    f = open("demofile.txt", "r")
    for x in f:
        print(x)

    # write
    # To write to an existing file, you must add a parameter to the open() function, "a" for append or "w" for overwrite
    # open the file for appending
    f = open("demofile.txt", "a")
    f.write("More content\n")

    # open the file for overwriting
    f = open("demofile.txt", "w")  # the "w" method overwrites the entire file
    f.write("Woops! I have deleted the content!")
    f.close()  # close file before reading after having written in it
    f = open("demofile.txt", "r")
    print(f.read())

    # creating new files
    # use the open() function with one of the "x", "a", or "w" parameters
    f = open("myfile.txt", "x")  # creates a new file

    # deleting files
    # import the os module
    import os

    os.remove('myfile.txt')  # removes file
    os.rmdir("folderName")  # removes folder, you can only remove empty folders

    # always close your files, in some cases, due to buffering, changes made to a file may not show until you close the file
    f.close()



"""
MUTABLE VS IMMUTABLE
"""

    # All the data in a Python code is represented by objects which each have an identity, type and value
    # An object???s identity (memory address) never changes once it has been created,id(variable) returns the id (memory address) of the variable
    # An object's type defines its possible values and operations, also the result of the type() method
    # An object's value could either change (mutable) or cannot change (immutable), mutability is determined by type

    # mutable data types: list, dictionary, set, and user-defined classes
    # immutable data types: int, float, decimal, bool, string, tuple, and range

    # mutable data types
        # supports item assignment
        mutableList = [1,2,3]
        mutableList[0] = 0

        # mutable data types can change their values without changing their identities
        # mutable data types are more memory efficient than immutable types since they can change without having to create a new location in memory
        mutableList = [1,2,3]
        print(id(mutableList))
        mutableList.append(4)
        print(id(mutableList))  # notice the id remains the same even after appending a value, we simply changed the list

        mutableList = [1,2,3]
        print(id(mutableList))
        mutableList = [2,3,4]
        print(id(mutableList))  # notice the id changed since we created a new list, not change the original list

        # Copying Mutable Objects by Reference
        list1 = [1,2,3]
        list2 = list1       # the equal sign does not mean equal values, but equal identity (memory address). list2 makes a reference to the same id as list1. list1 and list 2 are two different names given to the same object. list2 is exactly the same as list1
        print(id(list1))
        print(id(list2))    # notice the id of list 1 is the same as the id of list 2 since list 2 points to the same memory address as list 1
        list2+=[4,5,6]      # list2 was changed, but since list2 and list1 point to the have the same id as they point to the same object in computer memory, changes to list2 will also be made for list1
        print(list1)        # list1 was not directly changed, but the change in list2 caused a change in list1
        print(list2)


        # changing mutable data types through functions
        def changeList(li):     # this line says li = list3 and since list3 is a mutable data type, li makes a reference to list3 and any changes to li will be made to list3 as well
            li.append(100)
            print(id(li))   # prints id of li
        list3 = [1,2,3]
        print(id(list3))    # prints id of list3, notice it is the same as li
        changeList(list3)   # changes li, but since li=list3, list3 changes as well
        print(list3)

        # Shallow VS Deep Copying
            # The difference between shallow and deep copying is only relevant for compound objects (objects that contain other objects, like lists or class instances):
            # A shallow copy constructs a new compound object and inserts references into it to the objects found in the original
            # A deep copy constructs a new compound object and then, recursively, inserts copies into it of the objects found in the original.
            # make sure to import the copy module

            # shallow copy
                # making a shallow copy of an object won???t clone child objects. Therefore, the copy is not fully independent of the original
                # if the elements of the original objects are also mutable objects (example - inner lists), then the new object doesn???t have its own set of inner objects but rather references
                # use copy.copy(variable) method to shallow copy
                import copy
                a = [[1, 2, 3], [4, 5, 6]]
                shallow_a = copy.copy(a)    # shallow copy. shallow_a makes references to the objects in a
                print(id(a))
                print(id(shallow_a))        # notice a and shallow_a have different id
                print(id(a[0]))
                print(id(shallow_a[0]))     # notice a[0] and shallow_a[0] have the same id. shallow_a[0] points to the same location in memory as a[0]

                a.append(3)
                print(a)
                print(shallow_a)            # notice shallow_a didn't change since a and shallow_a don't have the same id

                a[0]=[6,7,8]                # a change was not made to a[0]. Rather, a[0] now points to a new list and a completely new memory address. shallow_a[0] still points to the original a[0] memory address
                print(id(a[0]))
                print(id(shallow_a[0]))     # notice they no longer have the same id since a[0] points to a new memory address while the id of shallow_a[0] never changed
                print(a)
                print(shallow_a)            # notice shallow_a didn't change since shallow_a[0] is not pointing at a[0]

                a = [[1, 2, 3], [4, 5, 6]]
                shallow_a = copy.copy(a)
                a[0][0]=0
                print(a)
                print(shallow_a)            # notice shallow_a changed since shallow_a[0][0] made a reference to a[0][0] and they have the same id. Thus, changing a[0][0] changed shallow_a[0][0]

            # deep copy
                # A deep copy of a mutable object is a new object in the memory
                # All the nested elements of the original object have their separate copies in the memory
                # Unlike shallow copies, no nested elements of the new object ever point to the nested elements of the original object in the memory.
                # use copy.deepcopy(variable) to deep copy
                import copy
                a = [[1, 2, 3], [4, 5, 6]]
                deep_a = copy.deepcopy(a)
                print(id(a))
                print(id(deep_a))
                print(id(a[0]))
                print(id(deep_a[0])) # notice there is no common id between a and deep_a, nor a[0] and deep_a[0]

                print(id(a[0][0]))
                print(id(deep_a[0][0]))
                # notice a[0][0] and deep_a[0][0] have the same id. This because they are integers and not mutable data types.
                # Thus, when a change to a[0][0] is made, a[0][0] points to a new memory address (immutable data type property), and a[0][0] and deep_a[0][0] will no longer have the same id
                # If a[0][0] and deep_a[0][0] were lists of integers, a[0][0] and deep_a[0][0] would have different id, but the items inside would have the same id (which will again change upon modification due to immutable data type property)

                # Thus, any change in a will not affect deep_a and vice versa
                # These are two different lists. Just that these lists ??? at the time of copying ??? had the same values.



    # immutable data types
        # does not support item assignment
        str = "hello"
        # str[0] = "2"  will print an error

        # change the values of immutable data types creates an entirely new variable in memory (changes id)
        immutableTuple = (1,2,3)
        print(id(immutableTuple))
        immutableTuple+=(4,5,6)
        print(id(immutableTuple)) # notice the id changed after joining tuples (changed its value)

        # Copying Immutable Objects
        text1 = "Python"
        text2 = text1   # text2 is exactly the same as text1, same id, type, and value
        print(id(text1))
        print(id(text2))    # since text2 is the exact same as text1, they have the same id
        text1 += " is awesome"  # updating the value of an immutable object creates an new object. Thus not only is the value changed, but the id changes as well. But, the id of text2 remains the same since it wasn't updated
        print(id(text1))
        print(id(text2))    # notice they have different id's. text1's id changed after it was updated. text2's id remained the same as it is still the same as text1's id prior to text1's change
        print(text1)
        print(text2)        # notice that the value of text2 did not change despite updating text1

        # Immutable Object Changing Its Value
        mutableList = [1,2,3,4]
        immutableTuple = (mutableList, 5)   # immutableTuple creates a reference to mutableList. Since we also added 5 to the tuple, it's id is not the same as the list. If immutableTuple = (mutableList), then the id would be the same
        print(id(mutableList))
        print(id(immutableTuple))       # note that despite immutableTuple referencing the mutableList, they don't have the same id since immutableTuple was changed by adding a 5. changing an immutable data types creates a completely new variable and changes its id

        print(immutableTuple)
        mutableList[0] = 3      # change the value of the list at index 0. Note the id of the mutable data type remains the same since we did not reinitialize it, we simply changed it
        print(immutableTuple)   # notice the the value of the immutableTuple changed even though we did not directly change it. Since immutableTuple creates a reference to mutableList and mutableList changed, so did immutableList

    # == operator vs is operator
    # the == operator compares the values of two objects while the is operator compares the identity of two objects
    numbers1 = [1, 2, 3]
    numbers2 = [1, 2, 3]
    print(numbers1 == numbers2)      # True since they have the same value
    print(numbers1 is numbers2)      # False since numbers1 and numbers2 have different id's (memory addresses)


"""
Try/Except
"""
    # The try block lets you test a block of code for errors.
    # The except block lets you handle the error.

    try:
        print(noNameVariable)
    except NameError:
        print("Name Error")
    except:
        print("Exception output message")


    # To throw (or raise) an exception, use the raise keyword
    x = -1
    if x<0:
        raise Exception("Sorry, no numbers below zero")





"""
Modular Programming
"""
    # Module is a file which contains various Python functions and global variables. It is simply just .py extension file which has python executable code.
    # Package is a collection of modules. It must contain an init.py file as a flag so that the python interpreter processes it as such. The init.py could be an empty file without causing issues.
    # Library is a collection of packages.
    # Framework is a collection of libraries. This is the architecture of the program.
    # there are built in modules like the math module, platform module, etc.
    # there are non-built in modules like pygame, or self created modules

    # create a module by saving the code you want in a file with the file extension .py
        person1 = {
          "name": "John",
          "age": 36,
          "country": "Norway"
        }
        def greetings(name):
            print("Hello "+ name)
        # suppose we save this above code in a file called myModule.py
    # use a module by using the import statement and writing the name of the module
        # the module has to be in the same directory as the file where the module is being imported into
            import myModule
        # if the module is not in the same directory, use the below code
            import module
            module.path.append('/.../application/app/folder')
    # use functions within a module with the syntax: module_name.function_name
        myModule.greetings("grant")
    # use variables within a module with the syntax: module_name.variable_name
        a = myModule.person1["age"]
    # rename a module by creating an alias when you import a module by using the as keyword
        import myModule as mM
        x = mM.person1["age"]       # notice instead of saying mymodule.person1["age"] we say mM.person1["age"] since we renamed the myModule module to mM
    # use the built-in dir() function that lists all the variable and function names in a module
        import platform
        x = dir(platform)
        print(x)    # output: ['DEV_NULL', '_UNIXCONFDIR', 'WIN32_CLIENT_RELEASES', 'WIN32_SERVER_RELEASES', '__builtins__', '__cached__', '__copyright__', '__doc__', '__file__', '__loader__', '__name__', '__package __', '__spec__', '__version__', '_default_architecture', '_dist_try_harder', '_follow_symlinks', '_ironpython26_sys_version_parser', '_ironpython_sys_version_parser', '_java_getprop', '_libc_search', '_linux_distribution', '_lsb_release_version', '_mac_ver_xml', '_node', '_norm_version', '_perse_release_file', '_platform', '_platform_cache', '_pypy_sys_version_parser', '_release_filename', '_release_version', '_supported_dists', '_sys_version', '_sys_version_cache', '_sys_version_parser', '_syscmd_file', '_syscmd_uname', '_syscmd_ver', '_uname_cache', '_ver_output', 'architecture', 'collections', 'dist', 'java_ver', 'libc_ver', 'linux_distribution', 'mac_ver', 'machine', 'node', 'os', 'platform', 'popen', 'processor', 'python_branch', 'python_build', 'python_compiler', 'python_implementation', 'python_revision', 'python_version', 'python_version_tuple', 're', 'release', 'subprocess', 'sys', 'system', 'system_aliases', 'uname', 'uname_result', 'version', 'warnings', 'win32_ver']
    # use the from keyword to import only parts from a module
        # below is the code for myModule
            def greeting(name):
              print("Hello, " + name)

            person1 = {
              "name": "John",
              "age": 36,
              "country": "Norway"
            }
        # importing only the person variable from the module with keyword from
            from myModule import person1
            x = person1["age"]  # When importing using the from keyword, do not use the module name when referring to elements in the module. Example: person1["age"], not mymodule.person1["age"]
    # pip
        # pip is a program that is installed with python 3 which manages modules
        # pip allows us to install modules from other developers

        # to install an external module
            # go to cmd
            # type "pip install moduleName"
            # the computer will install it for us
            # this module will be placed in the external libraries, lib folder, site-packages
            # to import the module in a python file, make sure to have "import moduleName" in the file

        # to uninstall an external module
            # go to cmd
            # type "pip uninstall moduleName"

        # ex:
            # cmd: pip install python-docx
            # this will create a docx folder and another folder within the site-package
            # py: import docx
            # cmd: pip uninstall python-docx



"""
Python Math
"""
    # built-in math functions
        # min() and max() returns the lowest or highest value in an iterable:
        x = min(22,3,4,)
        y = max(2,3,3)

        # The abs() function returns the absolute (positive) value of the specified number
        x = abs(-6.2)

        # The pow(x, y) function returns the value of x to the power of y
        x = pow(4,3)    # 4*4*4

    # math module
        #import math module to start using methods and constants of the module
        import math
        x = sqrt(2.3)
        x = math.pi

        # ceil() floor()
        # return type is integer so print(type(math.floor(1.2))) is <class 'int'>
        # math.floor(z) = math.ceil(z) = z where z is an integer
        x = math.ceil(1.4)      # rounds a number upwards to its nearest integer
        y = math.floor(1.4)     # rounds a number downwards to its nearest integer



"""
Run Time
"""
    # import the time module
    import time

    # Pythom time method time() returns the time as a floating point number expressed in seconds since the epoch, in UTC
    print(time.time())

    # displayRunTime
        startTime = time.time()
        # start of code
        list = []
        from random import randint
        for i in range(0,2000000):
            list.append(randint(0,10000000))
        list.sort()
        # end of code
        endTime = time.time()
        print(endTime-startTime)



"""
Overview of Python
"""

    # Python is an interpreted programming language. This means that each line of code is executed one by one.
    # A compiler takes high-level code and turns it into a lower-level code
    # An interpreter read code and translates it line-by-lne into code that can be executed by the computer
    # compiled programming language process: source code program-->compiler-->intermediate file-->interpreter-->output
    # interpreted programming language process: source code program-->interpreter-->output

    # The reason why Python is termed as an interpreted language is that the compiler in Python does relatively less work than an interpreter.
    # In Python, compilation takes place where the code compiles into a simpler form called bytecode which is a low-level code that can be executed by an interpreter.
    # The byte code is not really interpreted to machine code unless there is some kind of implementation like PyPy. Bytecodes are executed by Python Virtual Machine (PVM) which emulates a simplified execution environment.
    # The compilation process to bytecode is entirely implicit, meaning that you never invoke the compiler. Rather, you simply run a .py file.
    # The lack of an explicit compile step is why the Python executable is known as the Python interpreter.
    # The first step of an interpreter is to read a Python code or instruction.
    # It then checks the syntax of each line and verifies if the instruction is well-formatted.
    # The interpreter can display the errors of each line one by one.



"""
Collections
"""

    # The collection Module in Python provides different types of containers
    # A Container is an object that is used to store different objects and provide a way to access the contained objects and iterate over them
    # Examples of built-in containers are Tuple, List, Sets, and Dictionary
    # There are also 5 other containers in the collection module: counter, deque, namedTuple(), orderedDict, defaultdict

    # counter
        # a counter is a sub-class of the dictionary by keeping the count of the elements in an iterable in the form of an unordered dictionary
        # the key represents the element in the iterable and value represents the count of that element in the iterable
        # import the counter class from the collections module
        from collections import Counter

        # initializing counter objects
        # initialized using the counter() function
        # arguement could be a sequence of items, A=3, B=5, C=2, or a keyword arguments mapping string names to counts

        c1 = Counter(['B','B','A','B','C','A','B','B','A','C'])     # initialized with sequence of items ex: strings, lists, etc
        c2 = Counter({'A':3, 'B':5, 'C':2})                         # initialized with dictionary
        c3 = Counter(A=3, B=5, C=2)                                 # initialized with keyword arguments

        # Most frequently occurring letter will be inserted as the first key and the least frequently occurring letter will be inserted as the last key.
        print(c1)           # prints Counter({'B': 5, 'A': 3, 'C': 2})
        print(c2)           # prints Counter({'B': 5, 'A': 3, 'C': 2})
        print(c3)           # prints Counter({'B': 5, 'A': 3, 'C': 2})
        print(c1['A'])      # prints 3 which is the number of A's there are in c1
        print(c2['B'])      # prints 5 which is the number of B's there are in c2
        print(c3['C'])      # prints 2 which is the number of C's there are in c3
        print(c3['D'])      # prints 0 which is the number of D's there are in c3, no error is raised unlike a normal dictionary

        # the elements() returns an iterable of the elements within a counter, thus we use the list() constructor so we can print the list
        print(list(c1.elements()))      # prints ['B', 'B', 'B', 'B', 'B', 'A', 'A', 'A', 'C', 'C']
        print(list(c2.elements()))      # prints ['A', 'A', 'A', 'B', 'B', 'B', 'B', 'B', 'C', 'C']
        print(list(c3.elements()))      # prints ['A', 'A', 'A', 'B', 'B', 'B', 'B', 'B', 'C', 'C']

        # the most_common(top_n_counter_item_key) returns a list of the n item keys with the largest count in descending order
        print(c1.most_common(1))        # prints [('B', 5)]                         # 'B' appears the most, it appears 5 times
        print(c1.most_common(2))        # prints [('B', 5), ('A', 3)]               # 'A' appears second most, it appears 3 times
        print(c1.most_common(3))        # prints [('B', 5), ('A', 3), ('C', 2)]     # 'C' appears third most, it appears 2 times
        print(c1.most_common(4))        # prints [('B', 5), ('A', 3), ('C', 2)]     # notice that if n is greater than number of item keys, the arguement number of item keys instead of n
        print(c1.most_common(0))        # prints []                                 # notice that n = 0 prints empty list
        print(c1.most_common(2)[0])     # prints ('B', 5)                           # notice that this is the first tuple in the list, hence the [0]
        print(c1.most_common(2)[0][0])  # prints B                                  # notice that B is the first element in the first tuple in the list, hence the [0][0]

        # The subtract() takes iterable (list) or a mapping (dictionary) as an argument and deducts elements count using that argument
        c1 = Counter({1:3,2:4})
        c2 = Counter({1:1, 2:6})
        d = {1:1, 2:6}
        print(c1-c2)        # prints Counter({1: 2}), notice that minus operation doesn't display elements that have a count of 0 or less
        c1.subtract(d)
        print(c1)           # prints Counter({1: 2, 2: -2}), notice that subtract method does display elements that have a count of 0 or less

        # The subtract() takes iterable (list) or a mapping (dictionary) as an argument and increases elements count using that argument
        c1 = Counter({1:3,2:4})
        c2 = Counter({1:1, 2:-6})
        d = {1:1, 2:-6}
        print(c1+c2)        # prints Counter({1: 4}), notice that plus operation doesn't display elements that have a count of 0 or less
        c1.update(d)
        print(c1)           # prints Counter({1: 4, 2: -2}), notice that update method does display elements that have a count of 0 or less

        # clear() empties the counter
        c6 = Counter(a=4,b=2,c=0,d=2)
        print(c6)
        c6.clear()
        print(c6)           # prints Counter(), empty counter

        # intersection returns a Counter with the elements and count that are shared by both argument counters
        c1 = Counter({1:3,2:4})
        c2 = Counter({1:1, 2:6})
        print(c1 & c2)        # prints Counter({2: 4, 1: 1}), c1 has 4 twos and c2 has 6 twos so they have 4 twos overlap. Hence 2:4, same applies for the number of ones.

        # union returns a Count with the elements and count that are the max of both arguement counters
        c1 = Counter({1:3,2:4})
        c2 = Counter({1:1, 2:6})
        print(c1 | c2)        # prints Counter({2: 6, 1: 3}), c1 has 4 twos and c2 has 6 twos so the highest count for two is 6. Hence 2:6, same applies for the number of ones.

    # namedTuple
        # the namedTuple() returns a tuple with names for each position in the tuple
        # One of the biggest problems with ordinary tuples is that you have to remember the index of each field of a tuple object.
        # The namedtuple was introduced to solve this problem.
        # import the namedtuple class from the collections module
        from collections import namedtuple

        # initializing namedTuple objects
        # initialized using the namedtuple() function
        # arguement could be name of tuple, followed by string of variables
        # syntax: NameOfTuple = namedtuple("NameOfTuple", "param1, param2, param3, param4")

        Student = namedtuple('Student', 'fname, lname, age')    # setting up namedtuple parameters
        s1 = Student('John', 'Clarke', '13')                    # instance, number of arguements has to equal the number of parameters
        s2 = Student._make(['a', 'b', 'c'])                     # creates instance using list
        print(s1)               # prints Student(fname='John', lname='Clarke', age='13'), returns the namedtuple
        print(s2)               # prints Student(fname='a', lname='b', age='c')

        print(s1._asdict())     # prints {'fname': 'John', 'lname': 'Clarke', 'age': '13'}, returns the namedtuple as a dictionary
        print(s1._fields)       # prints ('fname', 'lname', 'age'), returns the field names aka the parameters

        print(s1.fname)     # prints John, returns value of fname variable
        print(s1.lname)     # prints Clarke, returns value of lname variable
        print(s1.age)       # prints 13, returns value of age variable

        print(s1[0])        # prints John, returns first variable in the namedTuple
        print(s1[1])        # prints Clarke, returns second variable in the namedTuple
        print(s1[2])        # prints 13, returns third variable in the namedTuple

        s1 = s1._replace(age = 44)  # changes age field to 44

    # deque
        # The deque is a list optimized for inserting and removing items.
        # import the deque class from the collecitons module
        from collections import deque

        # initializing deque objects
        # You can create a deque with deque() constructor. Pass in an iterable.
        d1 = deque(["a","b","c"])
        print(d1)           # prints deque(['a', 'b', 'c'])
        d2 = deque("hello")
        print(d2)           # prints deque(['h', 'e', 'l', 'l', 'o'])

        d1.append(4)        # adds 4 the the end of the deque
        print(d1)           # prints deque(['a', 'b', 'c', 4])
        d1.appendleft(2)    # adds 2 to the left of the deque
        print(d1)           # prints deque([2, 'a', 'b', 'c', 4])

        print(d1)               # prints deque([2, 'a', 'b', 'c', 4])
        d1.pop()                # removes last element in the deque
        print(d1)               # prints deque([2, 'a', 'b', 'c'])
        d1.popleft()            # removes first element in the deque
        print(d1)               # prints deque(['a', 'b', 'c'])

        d1.clear()              # removes everything from the deque
        print(d1)               # prints deque([])

        d1.extend("456")        # takes an iterable object and adds it to the end of the deque
        d1.extend("hello")
        print(d1)               # prints deque(['4', '5', '6', 'h', 'e', 'l', 'l', 'o'])

        d1.extendleft("hey")    # takes an iterable object and adds it to the front of the deque
        print(d1)               # prints deque(['y', 'e', 'h', '4', '5', '6', 'h', 'e', 'l', 'l', 'o']), notice it's y then e then h

        d1.clear()
        d1.extend([1,2,3,4])
        print(d1)               # prints deque([1, 2, 3, 4])
        d1.rotate(2)            # rotates all the elements right by that amount
        print(d1)               # prints deque([3, 4, 1, 2]), notice 1 which was index 0 is not index 0+2 which so index 3. 3 which was index 2 is now index 2+2 which is 4, but goes back to front to index 0.
        d1.rotate(-3)           # negative number rotates left
        print(d1)               # prints deque([2, 3, 4, 1])

        d = deque("hel", maxlen=5)  # sets max-length of the deque to be 5
        print(d)                    # prints deque(['h', 'e', 'l'], maxlen=5)
        d.extend([1,2,3,4])
        print(d)                    # prints deque(['l', 1, 2, 3, 4], maxlen=5), notice the deque will keep popping the first element to maintain a length of at most 5
        print(d.maxlen)             # prints 5, maxlen is not changeable after declaration

    # defaultdict
        # The defaultdict works exactly like a python dictionary, except for it does not throw KeyError when you try to access a non-existent key.
        # import the defaultdict class from the collections module
        from collections import defaultdict

        # initializing defaultdict objects
        d = defaultdict(int)        # set a default data type for the dict. default value of int is 0
        d['a']=1                    # creates a key 'a' with a value of 1
        d['b']="4"                  # creates a key 'b' with a value of "4"
        print(d)                    # prints defaultdict(<class 'int'>, {'a': 1, 'b': '4'}), notice <class 'int> specifcies the default data type
        print(d['a'])               # prints 1
        print(d['b'])               # prints "4"
        print(d['c'])               # prints 0, since 'c' is not a key, it goes to to default value of the default data type which is 0 for the int class

        #  let's say you want the count of each name in a list of names given as "Mike, John, Mike, Anna, Mike, John, John, Mike, Mike, Britney, Smith, Anna, Smith".
        count = defaultdict(int)
        names_list = "Mike John Mike Anna Mike John John Mike Mike Britney Smith Anna Smith".split()
        for names in names_list:
            count[names] +=1
        print(count)                # output defaultdict(<class 'int'>, {'Mike': 5, 'Britney': 1, 'John': 3, 'Smith': 2, 'Anna': 2})

    # OrderedDict
        # OrderedDict is a dictionary where keys maintain the order in which they are inserted, which means if you change the value of a key later, it will not change the position of the key
        # import the OrderedDict class from the collections module
        from collections import OrderedDict

        # initializing OrderedDict objects
        od = OrderedDict()
        od['a'] = 1
        od['b'] = 2
        od['c'] = 3
        print(od)

        # Most frequently occurring letter will be inserted as the first key and the least frequently occurring letter will be inserted as the last key.
        list = ["a","c","c","a","b","a","a","b","c"]
        cnt = Counter(list)
        od = OrderedDict(cnt.most_common())
        for key, value in od.items():
            print(key, value)

        """
        output is the following:
        a 4
        b 3
        c 2
        """




"""
OOP
"""

    # Object-oriented programming structures programs so that properties/attributes and behaviors are bundled into individual objects.
    # properties/attributes are variables like name, age, and address
    # behaviors are methods like walking, talking, breathing
    # A class is a template for creating objects
    # An object is a specific instance of a class

    # classes
        # Python class names are written in CapitalizedWords notation by convention
        # use the syntax: class ClassName(object):
        class Dog(object):
            pass
        # (object) is default so we can actually just write the following:
        class Dog():
            pass

        # creating attributes/properties
            # the __init__() method is always executed when the class is being initiated to assign values to object properties
            # the __init__() method syntax: def __init__(self, param1, param2):
            # The self parameter is a reference to the current instance of the class, and is used to access variables that belongs to the class
            # It does not have to be named self , you can call it whatever you like, but it has to be the first parameter of any function in the class

            # instance attributes
                # An instance attribute???s value is specific to a particular instance of the class
                # All Dog objects have a name and an age, but the values for the name and age attributes will vary depending on the Dog instance
                # instance attributes are defined in the __init__() method

            # class attributes
                # Class attributes are attributes that have the same value for all class instances
                # Class attributes are specific to a class, not an object
                # You can define a class attribute by assigning a value to a variable name beneath the class name

            class Dog:
                species = "Canis familiaris"    # creates a class attribute called species and assigns it to the value of "Canis familiaris"
                def __init__(self, name, age):
                    self.name = name            # creates an instance attribute called name and assigns to it the value of the name parameter
                    self.age = age              # creates an instance attribute called age and assigns to it the value of the age parameter
                    # note the word following self. does not have to be the same as the parameter. We could have self.lmfao = name and that's valid. But we would say d.lmfao to get the name where d is an instance of the class.

            # creating instance methods
                # instance methods are functions that are defined inside a class and can only be called from an instance of that class
                # instance method???s first parameter is always self. self represents the instance of the class
                # instance method syntax: def instanceMethodName(self, parameters):

                # the __str__() method allows you to customize the output of print(object). By default, print(object) gives the memory address which is not very useful
                # the return of the the __str__() should be a string
                # __str__() method syntax: def __str__(self): return something

                class Dog:
                    species = "Canis familiaris"
                    def __init__(self, name, age):
                        self.name = name
                        self.age = age
                    # instance method
                    def speak(self, sound):     # .speak() has one parameter called sound and returns a string containing the dog???s name and the sound the dog makes
                        return f"{self.name} says {sound}"
                    def __str__(self):          # __str__() returns a string containing the dog's name and age, return type must be a string
                        return f"{self.name} is {self.age} years old"

            # class variables
                class Employee:
                    employees = []  # class variable
                    raise_amount = 1.04  # class variable

                    def __init__(self, pay):
                        self.pay = pay
                        self.employees.append(self)

                    def apply_raise(self):
                        self.pay = int(
                            self.pay * self.raise_amount)  # here, self.raise_amount refers to the raise_amount variable specific to an instance, not the class

                # accessing class variables
                    # great explanation video: https://youtu.be/BJ-VvGyQxho     IMPORTANT CONCEPT: when we try to access a class variable from an instance, it will first check if that instance contains that class variable. If not, it will check if its class or any class it inherits from contains that class variable.

                    # accessing class variables from a class
                    # ClassName.classVariable returns the value of the class variable that belongs the class.
                    # We don't need an instance of the class to call the class variable.
                    # There will always be a class variable that is contained by the class.

                    # accessing class variable from an instance
                    # InstanceName.classVariable returns the value of the class variable that belongs to the instance.
                    # When we try to access a class variable from an instance, it will first check if that instance contains that class variable, then it will check if its class or any class it inherits from contains that class variable
                    # The class variable will not belong to an instance if the class variable has not been initialized by an instance.

                    # Note: ClassName.classVariable and InstanceName.classVariable are not the same class variable. They are only the same prior to the class variable being initialized by an instance.

                    print(Employee.employees)  # notice that we don't need an instance of the class to access the class variable
                    e1 = Employee(1000)  # create an instance
                    e2 = Employee(1000)  # create an instance
                    print(Employee.__dict__)  # notice there is a raise_amount item in the list.
                    print(e1.__dict__)  # notice there is no raise_amount item in the list. Thus, the e1 instance does not currently contain the raise_amount class variable. Rather it belongs to the Employee class.
                    print(Employee.employees)  # notice the employees class variable has updated after we initialized e1 and e2

                    print(e1.raise_amount)  # prints 1.04
                    print(e2.raise_amount)  # prints 1.04
                    # both instances will check if the instance contains that class variable and since as of now, no change was made to either instances, so the instance does not contain the class variable. Thus, they check the Employee class and see it has the class variable so the class variable that belongs to the Employee class.

                # changing class variables
                    # changing via the class
                    Employee.raise_amount = 1.05
                    print(Employee.raise_amount)  # prints 1.05
                    print(e1.raise_amount)  # prints 1.05
                    print(e2.raise_amount)  # prints 1.05
                    # notice the class variable has been updated for the class and all of its instances

                # changing via an instance
                    e1.raise_amount = 1.06  # making this assignment created an class variable within the e1 instance. Now, e1.raise_amount and Employees.raise_amount have nothing related, they are two completely different variables.
                    print(e1.__dict__)  # notice that unlike before, raise_amount is in the list because of the assignment e1.raise_amount = 1.06. Now, the instance e1 contains that class variable, not the class.
                    print(Employee.raise_amount)  # prints 1.05
                    print(e1.raise_amount)  # prints 1.06
                    print(e2.raise_amount)  # prints 1.05
                    # notice the class variable changed for only the instance e1 and not for any other instance nor the class since e1.raise_amount = 1.06 created a new variable specific to the e1 instance, not change the class variable for the class or any other instance.

                # changing via the class after having changed via an instance
                    Employee.raise_amount = 1.08
                    print(Employee.raise_amount)  # prints 1.08
                    print(e1.raise_amount)  # prints 1.06
                    print(e2.raise_amount)  # prints 1.08
                    # notice that e1.raise_amount is not updated since e1.raise_amount belongs to the instance, and has nothing to do with the Employee class
                    # e2.raise_amount still does not contain the raise_amount class variable since initialized it by saying e2.raise_amount = whateverAmount. Thus, it shows the class variable contained by the Employee class.

                # for the employees class variable, it makes sense to call it through the class since all the employees don't belong to a single instance, but the entire class
                # for the raise_amount class variable, it could make sense to call it through the instance since each employee has their own pay

        # class methods
            # cls implies that method belongs to the class while self implies that the method is related to instance of the class.
            # therefore member with cls is accessed by class name where as the one with self is accessed by instance of the class.

            # create class methods by adding the @classmethod decorator before creating the method
            # use the cls keyword as the first parameter. Now, we receive the class as the first parameter, not the instance.
            class Employee:
                raise_amt = 1.04
                def __init__(self, pay):
                    self.pay = pay
                @classmethod
                def set_raise_amt(cls, amount):
                    cls.raise_amt = amount  # changes the raise_amt class variable contained by the class, not the instance

            e1 = Employee(100)
            e2 = Employee(100)

            # InstanceName.classMethod() is the exact same as ClassName.classMethod()
            Employee.set_raise_amt(1.05)  # from the code within the class method, Employee.set_raise_amt(1.05) is the same as saying Employee.raise_amt = 1.05 since we called the class, not the instance
            print(Employee.raise_amt)  # prints 1.05
            print(e1.raise_amt)  # prints 1.05
            print(e2.raise_amt)  # prints 1.05

            e1.set_raise_amt(1.06)
            print(Employee.raise_amt)  # prints 1.06
            print(e1.raise_amt)  # prints 1.06
            print(e2.raise_amt)  # prints 1.06
            # notice e1.set_raise(1.06) changes the raise_amt class variable for the class and all instances since the class method calls the class, not the instance.

            e1.raise_amt = 2  # raise_amt is contained by the instance and not the class, thus the set_raise_amt class method doesn't affect the e1's raise_amt class variable
            e1.set_raise_amt(1.09)  # this has no effect on e1.raise_amt since e1.set_raise_amt(1.06) is the same as Employee.set_raise_amt(1.06) which we know has no affect on class variables contained by an instance. Yet, e1.set_raise_amt(1.09) will change the class variable for the class and other instances since it calls the class, not the instance.
            print(Employee.raise_amt)  # prints 1.09
            print(e1.raise_amt)  # prints 2
            print(e2.raise_amt)  # prints 1.09
            # notice e1.raise_amt is still 2 since we wrote e1.raise_amt = 2 which makes the class variable contained by the instance, not the class.

            # we can also use @classmethods as class constructors
            # this is not that efficient, just need to know the syntax, you will probably never use
            class Employee:
                raise_amt = 1.04
                def __init__(self, pay):
                    self.pay = pay
                @classmethod
                def set_raise_amt(cls, amount):
                    cls.raise_amt = amount  # changes the raise_amt class variable contained by the class, not the instance
                @classmethod
                def classMethodConstructor(cls, pay):
                    return cls(pay)

            e3 = Employee.classMethodConstructor(100)
            print(e3.pay)


        # static methods
            # while default methods within a class automatically pass self and class methods automatically pass cls, static methods don't pass anything automatically
            # they behave like normal functions(functions not related to OOP)
            # we include them in the class since they have some logical connection to the class and makes code cleaner
            # should not access the instance or the class anywhere in the method. In other words, should not use the cls nor self keywords.
            # a class can just have static methods which makes it really efficient to import such as the Math module
            # creating class methods using the #staticmethod decorator before creating the method
            class Math:
                @staticmethod
                def add(a, b):
                    return a + b

        # public, protected, and private methods
            # In Java, the public/protected/private keywords determines a class's visibility to all other classes
            # Unlike Java, there is no such thing as truly private and protected methods in Python.

            # Public
                # Public attributes of a class can be accessed from outside the class
                # Everything in Python is public by default
            # Protected
                # Protected attributes of a class are accessible only from within the class or its sub-classes
                # Add a prefix _ (single underscore) to make an instance variable protected
                # This prefix doesn't prevent instance variables from accessing or modifying the instance.
                class Student:
                    _schoolName = 'XYZ School'  # protected class attribute
                    def __init__(self, name, age):
                        self._name = name  # protected instance attribute
                        self._age = age  # protected instance attribute
                    def _sayHi(self):   # protected method
                        print("Hi")
                std = Student("Swati", 25)
                print(std._name)  # will print "Swati"
                std._name = 'Dipa'
                print(std._name)  # will print "Dipa
                std._sayHi()  # will print "Hi"
                # notice you can still access protected attributes like normal
                # thus, the responsible programmer would refrain from accessing and modifying instance variables if they are not supposed to
            # Private
                # Private attributes of a class are accessible only from within the class
                # Add a prefix __ (double underscore) to make an instance variable protected
                # While private variables will result in an error when being accessed or modified, it can still be accessed from outside the class
                class Student:
                    __schoolName = 'XYZ School' # private class attribute
                    def __init__(self, name, age):
                        self.__name=name  # private instance attribute
                        self.__age=age # private instance attribute
                    def __display(self):  # private method
                        print('This is private method.')
                std = Student("Swati", 25)
                print(std.__name)      # will raise AttributeError
                std.__name = 'Dipa'     # will not raiseError, but will not change the value of std.__name
                print(std.__name)      # will raise AttributeError
                std.__display()        # will raise AttributeError

        # getter, setter, deleter methods
            # getter, setter, and deleter allow for "data encapsulation" when changing attributes
            # getters return a variable, and they have the @property above the getter method
            # setters gives a value to a variable through a parameter, and they have the @getterMethodName.setter above the setter method
            # deleters delete a variable, and they have the @getterMethodName.deleter above the deleter method
            class Person:
                def __init__(self, age):
                    self.__age = age
                    self.__name = "Grant"
                @property       # getter method
                def age(self):
                    return self.__age
                @age.setter     # setter method
                def age(self, age):
                    self.__age = age
                @age.deleter    # deleter method
                def age(self):
                    self.__age = None
            # without getters, setters, and deleters, variables cannot be modified since p.__age would raise an AttributeError since it is private
            p = Person(40)
            print(p.__name) # raises an AttributeError since it is private
            p.age = 50      # uses setter method to set age to 50 instead of 40
            print(p.age)    # prints 50. Uses getter method to get the age for printing
            del p.age       # uses deleter method to delete the age variable
            print(p.age)    # prints None since the age was deleted

        # magic/dunder methods
            # dunder methods and magic methods are the same thing
            # dunder is short for double underscore method
            # allow us to implement higher level syntax (such as +,*,/*,>,=,<) into classes
            # all dunder methods from official python documentation: https://docs.python.org/3/reference/datamodel.html#special-method-names
            from queue import Queue as q    # import the Queue class
            import inspect                  # import the inspect module to check the source code of objects
            q1 = q()
            print(inspect.getsource(q))     # returns source code for the default Python Queue module, notice it doesn't have many dunder methods
            print(q1)                       # returns class type, which might not be useful
            q1+3                            # raises an Error since queue does not support operand type(s) for +: 'Queue' and 'int'
            # we can add dunder methods to resolve the non-useful class type return for print(q1) and the error raised for q1+3
            # in this specific case, to add dunder methods we can use inheritance
            class Queue(q):
                # dunder method allows str(Queue instance) which will return "hi i am a str dunder method"
                def __str__(self):
                    return "hi i am a str dunder method"
                # dunder method allows repr(Queue instance) which will return "hi i am a repr dunder method"
                def __repr__(self):
                    return "hi i am a repr dunder method"
                # dunder method allows for Queue instance + object
                def __add__(self, object):
                    self.put(object)
            q2 = Queue()
            # note that repr(q2) and str(q2) is the same as q2.__repr__() and q2.__str__() respectively. The same applies for other dunder method so instace + object is the same as instance.__add__(object)
            print(repr(q2))     # prints "hi i am a repr dunder method"
            print(str(q2))      # prints "hi i am a str dunder method"
            print(q2)           # prints "hi i am a str dunder method". returns our customized __str__ function even though __str__ and __repr__ have same call notation since __str__ has higher prevalence
            q2+6                # no longer raises an error

            # __str__ vs __repr__ dunder methods
                # Should always implement these two methods
                # Both __str__ and __repr__ functions return string representation of the object
                # The __str__ string representation is supposed to be human-friendly and mostly used for logging purposes   (for clients)
                # The __repr__ representation is supposed to contain information about object so that it can be constructed again   (for developers)
                # If a class has a repr method but not a str method, we can still write str(classInstance) and it will use the repr as a fallback
                import datetime
                now = datetime.datetime.now()
                print(now.__str__())    # prints "2021-06-22 12:34:29.291038". notice this is more readable for humans
                print(now.__repr__())   # notice "datetime.datetime(2021, 6, 22, 12, 34, 29, 291038)". this is more information rich (better for recreation of instance) and machine friendly

    # objects
        # import the ClassNameFile module if you are importing a class
        # then write: from ClassNameFile import ClassName

        # the 2 lines below should not be commented, but Pycharm is weird so I'll keep it commented. Pretend that the next two lines are not commented.
        # import ClassNameFile
        # from ClassNameFile import ClassName
        object = ClassName()
        print(ClassName.ClassVariable)

        # create object using its class name constructor and add required arguements
        buddy = Dog("Buddy", 9)
        miles = Dog("Miles", 4)
        # buddy and miles have different memory address. That???s because buddy is an entirely new instance and is completely unique from miles

        # accessing attributes and instance methods
            # access instance attributes using the objectName.instanceAttributeName
            print(buddy.age)    # will print 9
            # access class attributes using the objectName.classAttributeName
            print(buddy.species)
            # access instance methods using the objectName.instanceMethodName(parameters)
            miles.speak("Woof Woof")    # prints 'Miles says Woof Woof'

        # changing attribute values
            buddy.age = 3
            buddy.species = "Felis Silvestris"

        # del keyword is used for deleting objects or object properties
            # delete object
            del buddy

            # delete object properties
            del buddy.age

        # use the built-in isinstance(object, class) to determine if an object is an instance of a class
            isinstance(miles, Dog)      # will return true

        # use the __dict__ attribute which contains all the attributes defined for an object or a class
            class DogClass:
                def __init__(self, name, color):
                    self.name = name
                    self.color = color
                def bark(self):
                    if self.color == "black":
                        return True
                    else:
                        return False
            dc = DogClass('rudra', 'white')
            print(dc.__dict__)          # prints out the attributes for this instance. prints {'name': 'rudra', 'color': 'white'}
            print(DogClass.__dict__)    # prints out the attributes for the class. prints {'__module__': '__main__', '__init__': <function DogClass.__init__ at 0x000001855E600310>, 'bark': <function DogClass.bark at 0x000001855E600280>, '__dict__': <attribute '__dict__' of 'DogClass' objects>, '__weakref__': <attribute '__weakref__' of 'DogClass' objects>, '__doc__': None}



    # Inheritance
        # Inheritance is the process by which one class takes on the attributes and methods of another
        # Child classes are the newly formed classes
        # Parent classes are the classes that child classes are derived from
        # Prevents repetition of code while emphasizing a relationship between child and parent classes

        # Child classes can override or extend the attributes and methods of parent classes.
        # In other words, child classes inherit all of the parent???s attributes and methods but can also specify attributes and methods that are unique to themselves.
        # Child classes can change parent attributes and behaviors (override)
        # Child classes can use the original attributes and behaviors and add more (extend)

        # parent class
        class Dog:
            species = "Canis familiaris"
            def __init__(self, name, age):
                self.name = name
                self.age = age
            def __str__(self):
                return f"{self.name} is {self.age} years old"
            def speak(self, sound):
                return f"{self.name} says {sound}"

        # child classes
            # creating child classes syntax: class ChildClassName(ParentClass):
                class JackRussellTerrier(Dog):
                    pass
                class Dachshund(Dog):
                    pass
                class Bulldog(Dog):
                    pass

        # instantiating child classes and accessing their attributes and behaviours
            # notice the children classes inherit the __init__(self, name, age) method from the parent
            miles = JackRussellTerrier("Miles", 4)
            buddy = Dachshund("Buddy", 9)
            jack = Bulldog("Jack", 3)
            jim = Bulldog("Jim", 5)

            # notice the children classes inherit the attributes and behaviours from the parent
            print(miles.species)        # prints 'Canis familiaris'
            print(buddy.name)           # prints 'Buddy'
            print(jack)                 # Jack is 3 years old
            print(jim.speak("woof"))    # prints 'Jim says Woof'

        # use the built-in type(objectName) to determine which class a given object belongs to
            type(miles)     # prints <class '__main__.JackRussellTerrier'>

        # use the built-in isinstance(object, class) to determine if an object is an instance of a class
            # all objects created from a child class are instances of the parent class, although they may not be instances of other child classes
            isinstance(miles, Dog)          # will return True since miles inherits from the Dog parent class
            isinstance(miles, Bulldog)      # will return False since miles does not inherit from the Bulldog class although Bulldog inherits from the Dog parent class which miles inherits from

        # use the super().__init__() method in the child class's __init__() method if the child class has more initialization parameters than the parent class
            # parent class
            class Dog:
                species = "Canis familiaris"

                def __init__(self, name, age):
                    self.name = name
                    self.age = age

                def __str__(self):
                    return f"{self.name} is {self.age} years old"

                def speak(self, sound):
                    return f"{self.name} says {sound}"

            # child class
            class ChildClass1(Dog):
                def __init__(self, name, age, color):
                    super().__init__(name, age)
                    self.color = color

            dog = Dog("Dog",30)
            child1 = ChildClass1("Dog", 30, "green")

        # method overriding
            # rewrite a method from the parentClass in the childClass to override the method
            # to override a method, it must have the same name, same number of parameters, and same parameter types in both parent and child classes
            # when the childClass calls the overridden method, it calls the method in the child class, not the parent class anymore

            # parent class
            class Dog:
                def __init__(self,name,age):
                    self.name = name
                    self.age = age
                def talk(self):
                    print("Bark!")

            # child class
            class ChildClass1(Dog):
                def talk(self):
                    print("LMFAO")

            dog = Dog("Dog",30)
            child1 = ChildClass1("Dog", 30)
            dog.talk()      # will print "Bark!"
            child1.talk()   # will print "LMFAO"

        # method overloading
            # Unlike Java, there isn't any method overloading in Python

        # inheriting methods with child, parent, and grandparent classes
            # if a childClass has a parentClass and a grandParentClass and the childClass calls a method that it has inherited, it will first check if the parentClass has the method and try to run it. If the parentClass doesn't have it, then it will go to the grandParent class and so on.
            class GrandParent():
                def __init__(self, age):
                    self.age = age
                def sayHi(self):
                    print("hi from grandparent")

            class Parent(GrandParent):
                def __init__(self, age):
                    self.age = age
                def sayHi(self):
                    print(GrandParent.age)
                    print("hi from parent")

            class Child(Parent):
                def __init__(self, age):
                    self.age = age

            gp = GrandParent(90)
            p = Parent(40)
            c = Child(10)

            gp.sayHi()
            p.sayHi()
            c.sayHi()   # notice Child class doesn't have a sayHi() method, thus it checks the class where it inherited from which is the parentClass which has the sayHi() method so it runs the method from the parent.

        # super() keyword for both single inheritance and multiple inheritance(multiple inheritance not yet finished)
            # super() in single inheritance
                # super() alone returns a temporary object of the superclass that then allows you to call that superclass???s methods
                # The primary use case of this is to extend the functionality of the inherited method
                # super() alone won???t make the method calls for you: you have to call the method on the proxy object itself
                # Note that super(parentClass, self) is the same as super(). The parameterless call to super() is recommended and sufficient for most use cases.
                class Rectangle:
                    def __init__(self, length, width):
                        self.length = length
                        self.width = width
                    def area(self):                         # changing the area method would change the functionality of all the subclasses who inherit the area method and use it. This allows us to change the internal .area() logic in a single location which can be very efficient.
                        return self.length * self.width
                    def perimeter(self):
                        return 2 * self.length + 2 * self.width

                class Square(Rectangle):
                    def __init__(self, length):
                        super().__init__(length, length)    # notice the square class calls its parent class's constructor
                    # def area(self):                       # if this method was uncommented, the super().area() call in the cube class would return this method. This because a child class will go up the hierarchy and return the first defined method it can find. IE, Cube searches Square, then Rectangle.
                    #     return 69

                class Cube(Square):
                    def surface_area(self):
                        face_area = super().area()          # notice the cube class calls its square parent's class's area method. This area method is actually inherited by the square parent from the rectangle grandparent class.
                        return face_area * 6
                    def volume(self):
                        face_area = super().area()          # notice the cub class again calls its square parent's class's area method. This greatly reduces code repetition.
                        return face_area * self.length

            # super() in multiple inheritance, this is not complete yet, simply gave up since it was too niche. if i ever want to continue, check https://realpython.com/python-super/
                # Python supports multiple inheritance, in which a subclass can inherit from multiple superclasses and these superclasses are unrelated to each other
                class Rectangle:
                    def __init__(self, length, width):
                        self.length = length
                        self.width = width
                    def area(self):                         # changing the area method would change the functionality of all the subclasses who inherit the area method and use it. This allows us to change the internal .area() logic in a single location which can be very efficient.
                        return self.length * self.width
                    def perimeter(self):
                        return 2 * self.length + 2 * self.width
                class Square(Rectangle):
                    def __init__(self, length):
                        super().__init__(length, length)    # notice the square class calls its parent class's constructor
                class Triangle:
                    def __init__(self, base, height):
                        self.base = base
                        self.height = height
                    def area(self):
                        return 0.5 * self.base * self.height


                class RightPyramid(Triangle, Square):       # notice the RightPyramid has two parent classes, the Triangle parent class and the Square parent class
                    def __init__(self, base, slant_height):
                        self.base = base
                        self.slant_height = slant_height
                    def area(self):
                        base_area = super().area()          # notice both the Triangle parent class and the Square parent class have an area() method. Notice that it calls the Triangle parent class instead of the intended Square parent class due to MRO (which is explained below).
                        perimeter = super().perimeter()     # notice the RightPyramid calls the perimeter() method in its Square parent class which itself inherited the method from the Rectangle grandparent class.
                        return 0.5 * perimeter * self.slant_height + base_area
                # Triangle.area() was called and not Square.area() due method resolution order (MRO).

                # method resolution order (MRO)
                    # MRO tells you exactly where Python will look for a method you???re calling with super() and in what order
                    # Every class has an .__mro__ attribute that allows us to inspect the order
                    # If two separate classes have the same method name and signature, the first instance of .area() that is encountered in the MRO list will be called. Thus it is necessary that method signatures are unique???whether by using method names or method parameters to get resolved in the MRO.

                    print(RightPyramid.__mro__)     # prints (<class '__main__.RightPyramid'>, <class '__main__.Triangle'>, <class '__main__.Square'>, <class '__main__.Rectangle'>, <class 'object'>)
                    # this mro says:  methods will be searched first in Rightpyramid, then in Triangle, then in Square, then Rectangle, and then, if nothing is found, in object, from which all classes originate
                    # to change the MRO, change the signature of the the child class so you can search in the order you want
                    class RightPyramid(Square, Triangle):       # notice that the Square parent class comes before the Triangle class. Thus, the Square class and any class it inherits from (like Rectangle) will be searched before the Triangle class.
                        def __init__(self, base, slant_height):
                            self.base = base
                            self.slant_height = slant_height
                        def area(self):
                            base_area = super().area()          # notice both the Triangle parent class and the Square parent class have an area() method. Notice that it calls the Triangle parent class instead of the intended Square parent class due to MRO (which is explained below).
                            perimeter = super().perimeter()
                            return 0.5 * perimeter * self.slant_height + base_area
                    print(RightPyramid.__mro__)         # prints (<class '__main__.RightPyramid'>, <class '__main__.Square'>, <class '__main__.Rectangle'>, <class '__main__.Triangle'>, <class 'object'>)
                    # this mro says: methods will be searched first in Rightpyramid, then in Square, then Rectangle, then in Triangle, and then, if nothing is found, in object, from which all classes originate



"""
Decorators (I gave up on this)
"""
    # Functions are first-class objects. This means that functions can be passed around and used as arguments, just like any other object
    def say_hello(name):
        return f"Hello {name}"
    def greet_bob(greeter_func):        # notice the greet_bob() function however, expects a function as its argument
        return greeter_func("Bob")
    greet_bob(say_hello)    # prints 'Hello Bob'
    # The say_hello function is named without parentheses. This means that only a reference to the function is passed, and the function is not executed.
    # The greet_bob() function, on the other hand, is written with parentheses, so it will be called as usual

    # Inner Functions
        # inner functions are functions that are defined inside other functions
        def parent():
            print("Printing from the parent() function")
            def first_child():
                print("Printing from the first_child() function")
            def second_child():
                print("Printing from the second_child() function")
            second_child()
            first_child()
        parent()
        """
        calling parent() will print the following:
        Printing from the parent() function
        Printing from the second_child() function
        Printing from the first_child() function
        """
        # Note that the order in which the inner functions are defined does not matter. Rather, it's when the functions are called for execution that matters.

        # Inner functions are not defined until the parent function is called
        # Inner functions are locally scoped to the parent function so they only exist within the parent function as local variables


    # Returning Functions From Functions
        # Functions can be return values of functions
        def parent(num):
            def first_child():
                return "Hi, I am Emma"

            def second_child():
                return "Call me Liam"

            if num == 1:
                return first_child  # returns a reference to the function first_child, doesn't actually execute
            else:
                return second_child # returns a reference to the function second_child, doesn't actually execute



        first = parent(1)
        second = parent(2)
        print(first)    # prints <function parent.<locals>.first_child at 0x00000202363A0310>
        print(second)   # prints <function parent.<locals>.second_child at 0x00000202363A05E0>
        # notice these are the memory addresses (id) for the function objects
        # the output means that the first variable refers to the local first_child() function inside of parent(), while second points to second_child()

        first()         # prints 'Hi, I am Emma'
        second()        # prints 'Call me Liam'
