const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
  ];


const obj={
   
    Display : function(){
        console.log("Hiển thị danh sách: \n");
        for(let i=0; i<users.length; i++){
          console.log("===person "+(i+1)+"====");
          console.log("id: " + users[i].id);
          console.log("name: " + users[i].name);
          console.log("age: " + users[i].age);
          console.log("gender: " + users[i].gender);
          console.log("money: " + users[i].money+"\n");
        }
    },
  
    insertPerson : function(){
        users.push({ id: 5, name: "Nguyễn Đức Lâm", age: 19, gender: "female", money: 10000});
    },
  
    deletePerson : function(){
          for(let i=0; i<users.length; i++){
             if (users[i].id==1){
          users.splice(i,i+1);
        }
      }
    },
    
    updatePerson : function(){
       for(let i=0; i<users.length; i++){
           if (users[i].id==5){
              users[i].money+=10000;
              users[i].name+=" xinh gái :)";
              users[i].age=9;
            }
        }
    }
};

let select;
function Menu(select){
     switch(select){
       case 1:{
         obj.Display();
         break;
       }
       case 2:{
         obj.insertPerson();
         break;
       }
       case 3:{
         obj.deletePerson();
         break;
       }
       case 4:{
         obj.updatePerson();
         break;
       }
     }
}

function ThongKe(){
  //Them 2 nguoi vao mang
  users.push({ id: 7, name: "Nguyễn Hihi", age: 3, gender: "female", money: 2000});
  users.push({ id: 6, name: "Nguyễn thị A", age: 3, gender: "male", money: 900});
  console.log("===Danh sách sau khi thêm 2 người===");
  Menu(1);
  var countMale=0,countAge=0,countMoney=0;
  var max=users[0].money, min=users[0].money;
  for(let i=0; i<users.length; i++){
      if (users[i].gender=="male")
          countMale++;
      if (users[i].age>=15)
         countAge++;
      if (users[i].id%2==0)
         countMoney+=users[i].money;
      if (users[i].money>max)
         max=users[i].money;
      if (users[i].money<min)
         min=users[i].money;
  }
  console.log("===== THỐNG KÊ ====");
  console.log("Số nam là: "+countMale+"\n");
  console.log("Số người có tuổi lớn hơn 15: "+countAge+"\n");
  console.log("Tổng tiền những người có id chẵn: "+countMoney+"\n");
  console.log("Người giàu nhất: ");
  for(let i=0; i<users.length; i++){
      if (users[i].money==max)
         console.log(users[i].name+"\n");
  }
  console.log("Người nghèo nhất: ");
  for(let i=0; i<users.length; i++){
    if (users[i].money==min)
       console.log(users[i].name+"\n");
  }
}

function ChangeGender(){
  for(let i=0; i<users.length; i++){
    if (users[i].gender=="male")
       users[i].gender="female";
  }
  
}

console.log("===Hiển thị danh sách users ban đầu ===");
Menu(1); 

Menu(2); 
Menu(3); 
Menu(4); 
console.log("===Danh sách sau khi thêm, xóa, cập nhật thông tin===");
Menu(1);

ThongKe(); 

ChangeGender(); 
console.log("======Sau khi đổi giới tính=======");
Menu(1);