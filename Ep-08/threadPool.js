/*
Is Node JS is single threaded or multi threaded 

how libuv is interact with the OS  , 
most 

all networking is work with sockets etc : 

example : 
we establish a connection to write some data, it use the threads, at that time is thread is busy for writing the data, 
imagine if there are 1000 of user come so we need to make 1000 request so 1000   of threads are need  :So how this THing can be Manage in the JS

it is solve by the 
Scalable I/O event Notification mechanism 
epoll (linux)
kqueue(macos )
Read More : about that : Curious about it ............


Some Learning: 

"Donot block the main thread"
-sync methods - heavy json object 
-complex regax - complex calculation / loops 

'Data Structure are Important ' 

'Naming is important ' like setimadiate and process.nextTick haha ,

"there is alot to learn " --- keep learning 
 
*/