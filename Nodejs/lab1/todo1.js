
let fs =  require("fs")



let [,,command] = process.argv


if(command=="create"){
  let [,,,todo] = process.argv
  let data =  JSON.parse(fs.readFileSync("./data.json",{encoding:"utf8"}))
  id_d = data[data.length-1].id + 1
  data.push({id:id_d,title:todo,status:"to-do"})
  fs.writeFileSync("./data.json",JSON.stringify(data))

}
else if (command =="list")
{   
    let data =  JSON.parse(fs.readFileSync("./data.json",{encoding:"utf8"}))
    let inputs = process.argv
    if(inputs.length>3){
        [,,,,stats]=inputs
        new_data = data.filter((item)=>item.status==stats)
        console.log(new_data)
        for(let i=0;i<new_data.length;i++)
            {
                console.log(`${i+1}: title == > ${new_data[i].title} status:${new_data[i].status} `)
            }

    }
    else{
        
        console.log(data)
        for(let i=0;i<data.length;i++)
        {
            console.log(`${i+1}title == > ${data[i].title} status:${data[i].status} `)
        }
    }
    
   
}

else if (command=="delete"){
    let [,,,todo] = process.argv
    let data =  JSON.parse(fs.readFileSync("./data.json",{encoding:"utf8"}))
    if(typeof todo == "string")
    {
       

    let index = data.findIndex(function(item){
        return item.title==todo})
    
    if(index==-1)
    {
        console.log("task not exist")
    }
    else{
        data.splice(index,1)
        fs.writeFileSync("./data.json",JSON.stringify(data))
    }
    }
    else{
        let index =data.findIndex(function(item){
            return item.id==todo})
        data.splice(index,1)
        fs.writeFileSync("./data.json",JSON.stringify(data))

    }


}
else if (command=="edit"){
    let data =  JSON.parse(fs.readFileSync("./data.json",{encoding:"utf8"}))

    let inputs = process.argv
    if(typeof inputs[3] == "string" && inputs.length>5){
        if(inputs.length==7){
            [,,,cas1,toedit,,id]=inputs
            if(cas1=="-s"){
                let task_edit =data.findIndex(function(item){
                    return item.id==id})
                data[task_edit].status = toedit
                fs.writeFileSync("./data.json",JSON.stringify(data))

            }
            else if(cas1=="-t"){
                let task_edit =data.findIndex(function(item){
                    return item.id==id})
                data[task_edit].title = toedit
                fs.writeFileSync("./data.json",JSON.stringify(data))
            }
        }
        else{
            [,,,cas1,toeditstatus,cas2,toedit_title,,id]=inputs
            console.log(inputs)
            let task_edit =data.findIndex(function(item){
                return item.id==id})
            data[task_edit].title = toedit_title
            data[task_edit].status = toeditstatus
            fs.writeFileSync("./data.json",JSON.stringify(data))

        }
    }
    else{
        [,,,id,todo] = inputs
        let task_edit =data.findIndex(function(item){
            return item.id==id})
        data[task_edit].title = todo
        fs.writeFileSync("./data.json",JSON.stringify(data))

    console.log(data[task_edit])
    }


}

