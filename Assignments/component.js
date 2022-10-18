const container = document.querySelector('.container');
const container2 = document.querySelector('.container2');
function main(){
  console.log('Testing');
    header1();
    leftBar();
    middleBar();
    rightbar();
}
function header1(){
        console.log('testing 2')
         let heading=document.createElement('div');
         heading.setAttribute('class','header1');
         const word=heading.innerHTML ='Header';
         
         container.appendChild(heading);
         console.log('testing2');
    }
function leftBar(){

  let left = document.createElement('div');
  left.setAttribute('class','letfbar');
  const leftword = left.innerHTML = 'LeftBar';
//   left.innerHTML='LeftBar';
  container2.appendChild(left);
  console.log('leftBar');
}
function middleBar(){
    let middle = document.createElement('div');
    middle.setAttribute('class','mdl');
    const mid = middle.innerHTML = 'Middle';
    container2.appendChild(middle);
    console.log('middle');
}
function rightbar(){
    let rightBar = document.createElement('div');
    rightBar.setAttribute('class','rgt');
    const rt = rightBar.innerHTML = 'RightBar';
    container2.appendChild(rightBar);

}