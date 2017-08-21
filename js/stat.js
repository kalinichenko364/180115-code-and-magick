'use strict';
window.renderStatistics = function (ctx, names, times) {

  // Тень облака
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  // Облако
  ctx.fillStyle = '#fff';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  // Текст сообщения
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'bottom';
  ctx.fillText('Ура вы победили!', 230, 35);
  ctx.fillText('Список результатов:', 215, 55);

  // Худшее время
  var max = Math.max.apply(null, times);

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  var getRandomSatur = function () {
    return Math.random() * 100;
  };

  var barWidth = 40;
  var indent = 50;
  var initialX = 140;
  var initialY = 90;
  var nameInitialY = 245;
  var timeInitialY = 65;

  ctx.textBaseline = 'top';

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + getRandomSatur() + '%, 50%)';
    }

    var barHeight = times[i] * step;
    ctx.fillRect(
        initialX + ((barWidth + indent) * i),
        initialY + histogramHeight - barHeight,
        barWidth,
        times[i] * step);
    ctx.fillStyle = '#000';
    ctx.fillText(
        names[i],
        initialX + ((barWidth + indent) * i),
        nameInitialY);
    ctx.fillText(
        parseInt(times[i], 10),
        initialX + ((barWidth + indent) * i),
        timeInitialY + histogramHeight - barHeight);
  }
};
