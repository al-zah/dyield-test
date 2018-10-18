Notes:

1. Regarding task "Clicking on any of the title fields ​sorts the column​​ in ascending/descending order".
According to the documentation:

https://developer.github.com/v3/search/#parameters-4

the only fields supported for sorting are "followers, repositories, or joined"

In this application sorting is working on the client side, valid request is passing to the backend side, but there is no changes to UI, because returned payload is always same.

2. Regarding task "The only fields that should appear in this table are [​ id, login, avatar in the
form of an image and number of repos ]"

Apparently the field "number of repos" is not available during users search, it is available only if we request one user directly.

