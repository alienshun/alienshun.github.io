// 获取我们在 HTML 中写的 Canvas 画布元素
const canvas = document.getElementById('effectCanvas');
// 获取 2D 绘图接口（也就是画笔）
const ctx = canvas.getContext('2d');

// 设置画布的宽和高
canvas.width = 250;
canvas.height = 150;

// 创建一个数组，用来存放所有的粒子（光点）
const particlesArray = [];

// 粒子的数量，你可以试着修改这个数字看看效果（比如改成 50）
const numberOfParticles = 30;

// 定义一个“粒子”的类（Class）
class Particle {
    constructor() {
        // x 和 y 是粒子的坐标，随机生成在画布内部
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // 粒子的大小，在 1 到 3 之间随机
        this.size = Math.random() * 2 + 1;
        // 粒子移动的速度，很慢，打造安静的氛围
        this.speedX = (Math.random() * 1) - 0.5;
        this.speedY = (Math.random() * 1) - 0.5;
    }
    
    // 更新粒子的坐标位置
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // 如果粒子碰到了画布边缘，就让它反弹（速度取反）
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    // 将粒子画在画布上
    draw() {
        ctx.fillStyle = 'rgba(178, 34, 34, 0.5)'; // 颜色：半透明的深红色 (和CSS里标题颜色呼应)
        ctx.beginPath(); // 开始画路径
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); // 画一个圆
        ctx.fill(); // 填充颜色
    }
}

// 初始化函数：生成指定数量的粒子放入数组
function init() {
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

// 动画循环函数：这就是让光点动起来的核心
function animate() {
    // 1. 先把上一帧的画面擦除掉
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 2. 遍历每一个粒子，更新位置并重新画出来
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    
    // 3. 告诉浏览器：下一帧继续执行 animate 函数（形成无限循环）
    requestAnimationFrame(animate);
}

// 执行初始化
init();
// 开始播放动画
animate();