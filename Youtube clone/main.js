
//더보기 기능

const infoMore = document.querySelector('.infoMore');
console.log(infoMore);
const infoTitle = document.querySelector('.infoTitle');
console.log(infoTitle);

//더보기 clamp
infoMore.addEventListener('click', () => {
    infoMore.classList.toggle('clicked');
    infoTitle.classList.toggle('clamp');
    
    //더보기 버튼 텍스트 변경
    if(infoMore.innerText === '더보기') {
        infoMore.innerText = '간략히';
    } else infoMore.innerText = '더보기';
});

//좋아요 싫어요 버튼 색상 변경 * 숫자 up, down 설정해야함

const like = document.querySelector('.fa-thumbs-up');
const disLike = document.querySelector('.fa-thumbs-down');

like.addEventListener('click', () => {
    like.style.color = like.style.color === 'white' ? 'blue' : 'white';
    if (like.style.color === 'blue') {
        disLike.style.color = 'white';  // 색만 바뀌는 기능인데 이게 맞는지 모르겠음...
    }
    
});

disLike.addEventListener('click', () => {
    disLike.style.color = disLike.style.color === 'white' ? 'red' : 'white'
    if (disLike.style.color === 'red') {
        like.style.color = 'white';
    }
});

