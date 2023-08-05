console.log("hi");
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Camella Cabello',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Aishwariya Rai',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]
console.log(data);
let a1=document.getElementsByClassName('se');
console.log(a1[0]);
Array.from(data).forEach(element => {
    let gb=document.getElementById('x1');
    let i=0;
    gb.addEventListener('click',function(){
        console.log("hi");
        a1[0].innerHTML=`<img src="${data[i].image}" alt=""style="margin-left: 660px;">
        <table>
            <tr><td>${data[i].name}</td></tr>
            <tr><td>${data[i].age}</td></tr>
            <tr><td>${data[i].city}</td></tr>
            <tr><td>${data[i].language}</td></tr>
            <tr><td>${data[i].framework}</td></tr>
        </table>`
        if(i==4){
            i=-1;
        }
        // a1[0].innerHTML="";
        i++;
    })
    console.log(element.name);
});