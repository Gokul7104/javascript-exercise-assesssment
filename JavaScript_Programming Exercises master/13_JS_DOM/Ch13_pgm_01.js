// Level 1

// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
// 2. Get each of the the paragraph using document.querySelector('#id') and by their id
// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
// 4. Loop through the nodeList and get the text content of each paragraph
// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// 6. Set id and class attribute for all the paragraphs using different attribute setting methods

// Level 2

// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
// 3. Set text content, id and class to each paragraph



//answer//
            //html//
<p id="para1">"First Paragraph"</p>
<p id="para2">"Second Paragraph"</p>
<p id="para3">"Third Paragraph"</p>
<p id="para4">"Fourth Paragraph"</p>
const firstPara = document.querySelector('p');
console.log(firstPara);
const para1 = document.querySelector('#para1');
const para2 = document.querySelector('#para2');
const para3 = document.querySelector('#para3');
const para4 = document.querySelector('#para4');
const allParas = document.querySelectorAll('p');
console.log(allParas);
allParas.forEach(para => {
  console.log(para.textContent);
})
para4.textContent = 'Fourth Paragraph';
para1.id = 'para1';
para1.className = 'paragraph';
para2.setAttribute('id', 'para2');
para2.classList.add('paragraph');
para3.id = 'para3';
para3.classList.add('paragraph');
para4.id = 'para4';
para4.classList.add('paragraph');
para1.style.color = 'green';
para1.style.fontSize = '24px';
para1.style.fontFamily = 'Arial';
para2.style.color = 'red';
para2.style.background = 'yellow';
para2.style.border = '1px solid black';
para3.style.color = 'green';
para3.style.fontStyle = 'italic';
para4.style.color = 'red';
para4.style.textDecoration = 'underline';
allParas.forEach((para, index) => {
  if (index % 2 === 0) {
    para.style.color = 'green';
  } else {
    para.style.color = 'red';
  }
})
para1.textContent = 'First Paragraph';
para1.id = 'para1';
para1.className = 'paragraph';
para2.textContent = 'Second Paragraph';
para2.id = 'para2';
para2.className = 'paragraph';
para3.textContent = 'Third Paragraph';
para3.id = 'para3';
para3.className = 'paragraph';
para4.textContent = 'Fourth Paragraph';
para4.id = 'para4';
para4.className = 'paragraph';