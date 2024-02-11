
  const canvas = document.getElementById("tutorial");
  const ctx = canvas.getContext("2d");

  let isSmiling = true;

  function drawSmiley() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

     // Draw face
     ctx.beginPath();
     ctx.arc(100, 100, 60, 0, Math.PI * 2);
     ctx.fillStyle = '#FFD700'; // Yellow
     ctx.fill();

     // Draw eyes
     ctx.beginPath();
     ctx.arc(80, 80, 8, 0, Math.PI * 2);
     ctx.arc(120, 80, 8, 0, Math.PI * 2);
     ctx.fillStyle = 'black';
     ctx.fill();

     // Draw mouth
     if (isSmiling) {
         ctx.beginPath();
         ctx.arc(100, 120, 30, 0, Math.PI, false);
         ctx.lineWidth = 2;
         ctx.strokeStyle = 'black';
         ctx.stroke();
     } else {
         ctx.beginPath();
         ctx.arc(100, 120, 30, Math.PI, Math.PI * 2, false);
         ctx.lineWidth = 2;
         ctx.strokeStyle = 'black';
         ctx.stroke();
     }

  }

drawSmiley();

canvas.addEventListener('click', function() {
    isSmiling = !isSmiling;
    drawSmiley();
});