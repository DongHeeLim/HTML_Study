var alphabet = {
  a:'a',
  b:'b'
  f1:function(){
    console.log(this.a);
  }
  f2:function(){
    console.log(this.b);
  }
}



alphabet.f1();
alphabet.f2();
