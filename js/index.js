function block() {
    alert('미리보기 페이지에서는 기능이 제한됩니다.');
}

function mapError() {
    alert('\'네이버지도\' 혹은 \'카카오맵\'을 클릭해주세요.')
}

function openNavermap() {
    window.open('https://map.naver.com/p/entry/place/202675456?c=15.00,0,0,0,dh')
}

function openKakaomap() {
    window.open("https://map.kakao.com/")
}

function commentsAdd() {
    let name = $('#name').val();
    let password = $('#password').val();
    let msg = $('#msg').val();
    
    let html = `
    <div class="commentsFirst">
        <p>${name}</p>
        <p><span>2023.12.18.</span></p>
    </div>
    <div class="commentsSec">${msg}</div>
    `;

    $('#Comments').append(html);
}