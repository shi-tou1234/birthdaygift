// 获取元素
const candles = document.querySelectorAll('.candle');
const resetBtn = document.getElementById('resetBtn');
const confettiContainer = document.getElementById('confetti');

let allCandlesOut = false;

// 蜡烛点击事件
candles.forEach(candle => {
    candle.addEventListener('click', () => {
        if (!candle.classList.contains('out')) {
            candle.classList.add('out');
            
            // 检查是否所有蜡烛都熄灭了
            checkAllCandlesOut();
        }
    });
});

// 检查所有蜡烛是否都熄灭
function checkAllCandlesOut() {
    const outCandles = document.querySelectorAll('.candle.out').length;
    
    if (outCandles === candles.length && !allCandlesOut) {
        allCandlesOut = true;
        celebrateAllCandlesOut();
    }
}

// 所有蜡烛熄灭后的庆祝效果
function celebrateAllCandlesOut() {
    // 创建彩纸效果
    createConfetti();
    
    // 显示祝福消息
    setTimeout(() => {
        alert('🎉 恭喜！所有蜡烛都熄灭了！\n祝福父亲生日快乐，永远健康幸福！🎂');
    }, 500);
}

// 创建彩纸效果
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            
            confettiContainer.appendChild(confetti);
            
            // 移除彩纸元素
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 30);
    }
}

// 重新点燃按钮
resetBtn.addEventListener('click', () => {
    candles.forEach(candle => {
        candle.classList.remove('out');
    });
    allCandlesOut = false;
    
    // 添加重新点燃的动画效果
    candles.forEach((candle, index) => {
        setTimeout(() => {
            candle.style.animation = 'none';
            setTimeout(() => {
                candle.style.animation = '';
            }, 10);
        }, index * 100);
    });
});

// 页面加载动画
window.addEventListener('load', () => {
    // 添加进入动画
    document.querySelector('.container').style.animation = 'fadeIn 1s ease-in';
});

// 添加淡入动画的CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    // 按R键重新点燃蜡烛
    if (e.code === 'KeyR') {
        resetBtn.click();
    }
    
    // 按数字键1-5熄灭对应的蜡烛
    if (e.code.startsWith('Digit') || e.code.startsWith('Numpad')) {
        const num = parseInt(e.key);
        if (num >= 1 && num <= 5) {
            candles[num - 1].click();
        }
    }
});

// 添加背景粒子效果
function createParticles() {
    const particleCount = 50;
    const particles = document.createElement('div');
    particles.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    `;
    document.body.appendChild(particles);
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particles.appendChild(particle);
    }
}

// 添加漂浮动画
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
        }
    }
`;
document.head.appendChild(particleStyle);

// 初始化粒子效果
createParticles();
