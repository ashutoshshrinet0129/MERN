#include<iostream>
using namespace std;
int main(){
    int a=6 , b = 7;
// cout<<"This is ahello world program";
cout<<"Operators in C++ : "<<endl;
cout<<" Following are thr types of operators in C++"<<endl;
//Arthmetic Operators 
cout<<"The Value of a + b is "<<a+b<<endl;
cout<<"The Value of a - b is "<<a-b<<endl;
cout<<"The Value of a * b is "<<a*b<<endl;
cout<<"The Value of a / b is "<<a/b<<endl;
 cout<<"The Value of a % b is "<<a%b<<endl;
cout<<"The Value of a++ b is "<<a++ <<endl;
cout<<"The Value of a-- is "<<a--<<endl;
cout<<"The Value of ++a is "<<++a<<endl;
cout<<"The Value of --a is "<<--a<<endl;
cout<<endl;
// Assignment Operators --> used to assign values to variables
// int a = 3, b = 9;
// char d = 'd';
// Comparison operators
cout << "The value of a == b is " << (a == b) << endl;
cout << "The value of a != b is " << (a != b) << endl;
cout << "The value of a >= b is " << (a >= b) << endl;
cout << "The value of a <= b is " << (a <= b) << endl;
cout << "The value of a > b is " << (a > b) << endl;
cout << "The value of a < b is " << (a < b) << endl;


// Logical operators
cout << "Following are the logical operators in C++" << endl;
cout << "The value of this logical and operator ((a==b) && (a<b)) is:"
     << ((a==b) && (a<b))
     << endl;
cout << "The value of this logical or operator ((a==b) || (a<b)) is:"
     << ((a==b) || (a<b))
     << endl;
cout << "The value of this logical not operator (!(a==b)) is:"
     << (!(a==b)) << endl;

return 0;

}