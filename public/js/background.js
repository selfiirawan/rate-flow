const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const SYMBOLS = ['$', '€', '£', '¥', '₿', '₩', '₣', '₹', '₽', '¢', '₦', '฿'];
const PARTICLE_COUNT = 38;

const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
    x:        Math.random() * window.innerWidth,
    y:        Math.random() * window.innerHeight,
    sym:      SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
    size:     11 + Math.random() * 20,
    speed:    0.12 + Math.random() * 0.35,
    drift:    (Math.random() - 0.5) * 0.25,
    alpha:    0.15 + Math.random() * 0.25,
    rot:      Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.004,
}));

const VLINE_COUNT = 5;
const vlines = Array.from({ length: VLINE_COUNT }, (_, i) => ({
    x:     ((i + 0.5) / VLINE_COUNT) * window.innerWidth,
    speed: 0.08 + Math.random() * 0.15,
    alpha: 0.03 + Math.random() * 0.04,
}));

const ORBS = [
    [0.15, 0.25, 'rgba(200,240,74,0.08)', 300],
    [0.85, 0.75, 'rgba(60,100,255,0.06)', 260],
    [0.50, 0.90, 'rgba(200,240,74,0.04)', 200],
];

let t = 0;

(function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    t += 0.004;

    ORBS.forEach(([rx, ry, color, radius]) => {
        const x = canvas.width  * rx + Math.sin(t * 0.7) * 70;
        const y = canvas.height * ry + Math.cos(t * 0.5) * 50;
        const g = ctx.createRadialGradient(x, y, 0, x, y, radius);
        g.addColorStop(0, color);
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });

    vlines.forEach(line => {
        const grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
        grd.addColorStop(0,   'transparent');
        grd.addColorStop(0.5, `rgba(200,240,74,${line.alpha})`);
        grd.addColorStop(1,   'transparent');

        ctx.beginPath();
        const baseX = line.x + Math.sin(t * line.speed * 5) * 25;
        ctx.moveTo(baseX, 0);
        for (let y = 0; y <= canvas.height; y += 5) {
            ctx.lineTo(baseX + Math.sin(y * 0.012 + t * 1.8) * 14, y);
        }
        ctx.strokeStyle = grd;
        ctx.lineWidth = 1;
        ctx.stroke();
    });

    particles.forEach(p => {
        p.y   -= p.speed;
        p.x   += p.drift;
        p.rot += p.rotSpeed;

        if (p.y < -50)                 { p.y = canvas.height + 50; p.x = Math.random() * canvas.width; }
        if (p.x < -50)                   p.x = canvas.width + 50;
        if (p.x > canvas.width + 50)     p.x = -50;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = '#fff';
        ctx.font = `${p.size}px monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(p.sym, 0, 0);
        ctx.restore();
    });

    requestAnimationFrame(draw);
})();