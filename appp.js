var data
var name1
var id
var eng
var math
var sci
var hindi
var userName
var password

document.getElementById("btn").onclick = () => {
    userName = document.getElementById("userName").value
    password = document.getElementById("password").value
    fetch('./userInfo.json').then((res) =>{res.json().then((usernInfo) =>{
     
        usernInfo.forEach(x => {
            if(x.userName == userName && x.password == password){
                document.getElementById("dashboard").style.display = "block"
                document.getElementById("signin").style.display = "none"
            }
        })
        

        document.getElementById("inputStudetsData").onclick = () => {

            document.getElementById("tableData").style.display = "none"
            document.getElementById("container").style.display = "block"
            document.getElementById("marks").style.display = "none"
            
            document.getElementById("btn1").onclick = () => {
                name1 = document.getElementById("name").value
                id = document.getElementById("id").value

                document.getElementById("tableData").style.display = "none"
                document.getElementById("container").style.display = "none"
                document.getElementById("marks").style.display = "block"
                document.getElementById("btn2").onclick = () =>{
                    math = document.getElementById("math").value
                    eng = document.getElementById("english").value
                    sci = document.getElementById("science").value
                    hindi = document.getElementById("hindi").value
    
                    add(name1,id,eng,math,sci,hindi)
                }
            
            
            
            

            }
        
        }


        document.getElementById("showData").onclick = () => {

            document.getElementById("tableData").style.display = "block"
            document.getElementById("container").style.display = "none"
            document.getElementById("marks").style.display = "none"
        
            callData()
        }


        







        })})
}


function callData(){
    let table =`<tr><th>Name</th><th>ID</th><th>English</th><th>Mathematics</th><th>Science</th><th>Hindi</th></tr>`
    fetch('./data.json').then((res) => {res.json().then((result) =>{
        console.log(result)
        result.forEach(element => {
            table+=`<tr><td>${element.name}</td><td>${element.id}</td><td>${element.marks.english}</td><td>${element.marks.math}</td><td>${element.marks.science}</td><td>${element.marks.hindi}</td></tr>`
            
        });
        
    document.getElementById("tableData").innerHTML = table

            })})

}

function add(name,id,eng,math,sci,hindi) {
    let table =`<tr><th>Name</th><th>ID</th><th>English</th><th>Mathematics</th><th>Science</th><th>Hindi</th></tr>`
    fetch('./data.json').then((res) => {res.json().then((result) =>{
        
        let obj = {name:name,id:id,marks:{english:eng,math:math,hindi:hindi,science:sci}}
        result.push(obj)


        result.forEach(element => {
            table+=`<tr><td>${element.name}</td><td>${element.id}</td><td>${element.marks.english}</td><td>${element.marks.math}</td><td>${element.marks.science}</td><td>${element.marks.hindi}</td></tr>`
            
        });
    document.getElementById("tableData").style.display = "block"
    document.getElementById("container").style.display = "none"
    document.getElementById("marks").style.display = "none"
    document.getElementById("tableData").innerHTML = table
        console.log(result)
            })})
}







fetch('./userInfo.json').then((res) =>{res.json().then((usernInfo) =>{

    
    var tbl = `<tr>
<th>User Name</th>
<th>Password</th>
</tr>`
for(x of usernInfo){
    tbl+=`<tr>
    <th>${x.userName}</th>
    <th>${x.password}</th>
</tr>`
}
document.getElementById("data").innerHTML = tbl

    })})







    var a=0
    function display(){
        if(a==0){
            document.getElementById("container1").style.transform = "translate(-50%,0%)"
            a=1
        }else{
            document.getElementById("container1").style.transform = "translate(-10%,0%)"
            a=0
        }
    }
