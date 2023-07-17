# Constructor
- The constrctor is a method that is used to initalize the properties of an object when it is created.
- Its name is same as the class name.

# final,Finally and finalize
- final is a keyword , if we use it against primitive types they become as constants.
- If we use this against an Object declaration can not be change the reference
- If we use this against a class that can not be Inherited and against methods those can not be override.

- **finally** is a block we can use this in exception handling. It gets exectuted always.
- **finalize()** is a method that can be called by JVM to clean up the memory.

# Generics
- Generics came in from java1.5
- Using these we can specify the type of data that can go into the collection.

```
List<Integer> empIds = new ArrayList();
```


# Diff Types Of collection
- List(ArrayList,Vector,LinkedList) -- It allows duplicate values
- Set(HashSet-->LinkedHashSet,SortedSet-->TreeSet)-- It Deos not allow duplicate values
- Queue(PriorityQueue,BlockingQueue) -- FirstInFirstOut
- Map(HashMap->LinkedHashMap,HashTable,SortedMap->TreeMap) -- store the data key value pairs

# arraylist vsLinkedList
- 
