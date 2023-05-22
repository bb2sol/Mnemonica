const stack = [["♣","4"],["♥","2"],["◆","7"],["♣","3"],["♥","4"],["◆","6"],["♠","A"],["♥","5"],["♠","9"],["♠","2"],
["♥","Q"],["◆","3"],["♣","Q"],["♥","8"],["♠","6"],["♠","5"],["♥","9"],["♣","K"],["◆","2"],["♥","J"],
["♠","3"],["♠","8"],["♥","6"],["♣","10"],["◆","5"],["◆","K"],["♣","2"],["♥","3"],["◆","8"],["♣","5"],
["♠","K"],["◆","J"],["♣","8"],["♠","10"],["♥","K"],["♣","J"],["♠","7"],["♥","10"],["◆","A"],["♠","4"],
["♥","7"],["◆","4"],["♣","A"],["♣","9"],["♠","J"],["◆","Q"],["♣","7"],["♠","Q"],["◆","10"],["♣","6"],
["♥","A"],["◆","9"]];

// 로직
// 버튼 클릭시 answer 값 바꾸고, answer 값 바뀜이 감지될때마다 input을 갱신(괜찮은지는 모르겠음)

const input = $(".input_answer");
const answer = {
    suit: "",
    number: ""
};
const correctModal = `<div class="dialog_area">
<div class="dialog">
    <p class="answer_text">정답!!</p>
<button type="button" class="btn_base btn_close">닫기</button>
</div>
</div>`;

const wrongModal = `
<div class="dialog_area">
<div class="dialog">
<p class="answer_text">땡!!</p>
        <p class="answer_desc">n번째 카드는 ㅇㅇ입니다!</p>
<button type="button" class="btn_base btn_close">닫기</button>
</div>
</div>`;

let num = 0;

$(function(){
    setQuestion();

    $(".btn_suit").on('click', function () {
        answer.suit = $(this).text();
        setAnswer();
    });

    $(".btn_number").on('click', function () {
        answer.number = $(this).text();
        setAnswer();
    });

    $(".btn_handler.delete").on('click', function () {
        resetAnswer();
    });

    $(".btn_handler.submit").on('click', function () {
        if (stack[num-1][0] == answer.suit && stack[num-1][1] == answer.number) {
            $("body").append(correctModal);
        }
        else {
            $("body").append(wrongModal);
            $(".answer_desc").text(num+"번째 카드는 "+ stack[num-1][1] + stack[num-1][0] +"입니다");
        }
    });

    $(document).on('click', ".btn_close", function () {
        resetAnswer();
        $(".dialog_area").remove();
        setQuestion();
    });
    
});

function setAnswer() {
    // 뭘 앞에 쓸 지 순서 정하기
    // $(".input_answer").val(answer.suit.toString() + answer.number.toString());
    $(".input_answer").val(answer.number.toString() + answer.suit.toString());
}

function resetAnswer() {
    answer.suit = "";
    answer.number = "";
    setAnswer();
}

function setQuestion() {
    num = Math.floor(Math.random() * (52 - 1)) + 1;
    $(".question").text(num + "번째 카드를 입력해주세요");
}

function printAllCards() {
    let array1 = ["♠","◆","♥","♣"];
    let array2 = ["A", "2", "3", "4","5","6","7","8","9","10","J","Q","K"];
    
    array1.forEach(element => {
        array2.forEach(n => {
            
            console.log(`["${element}","${n}"],`);
            if(n=="K"){
                console.log("\n")
            }
        });
    });
}