/**
 * Le Petit Glouton - Game Logic
 * Features: Levels, Moving Walls, Smart Ghosts, Teleporters, Power Pellets, Audio, High Score,
 *           Kawaii Character, VFX, Mobile Support, Menus, Game Modes, Special Enemies.
 */

const MAP_LAYOUTS = [
    // Level 1: Original (Modified with Tunnel & Power Pellets)
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 3, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 3, 1],
        [1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1],
        [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
        [1, 2, 1, 2, 1, 1, 1, 0, 1, 1, 1, 2, 1, 2, 1],
        [1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1],
        [0, 0, 0, 2, 1, 0, 1, 1, 1, 0, 1, 2, 0, 0, 0],
        [1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1],
        [1, 1, 1, 2, 1, 0, 1, 1, 1, 0, 1, 2, 1, 1, 1],
        [1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1],
        [1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1],
        [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
        [1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1],
        [1, 3, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 3, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    // Level 2: Open Cross
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1],
        [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
        [1, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1],
        [1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1],
        [1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1],
        [0, 0, 0, 2, 1, 0, 1, 0, 1, 0, 1, 2, 0, 0, 0],
        [1, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1],
        [1, 1, 1, 2, 1, 0, 1, 0, 1, 0, 1, 2, 1, 1, 1],
        [1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1],
        [1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1],
        [1, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1],
        [1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1],
        [1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    // Level 3: Columns
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 3, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 3, 1],
        [1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1],
        [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
        [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
        [1, 2, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 2, 1],
        [0, 0, 0, 2, 1, 0, 1, 0, 1, 0, 1, 2, 0, 0, 0],
        [1, 1, 1, 2, 2, 0, 0, 0, 0, 0, 2, 2, 1, 1, 1],
        [1, 2, 2, 2, 1, 0, 1, 0, 1, 0, 1, 2, 2, 2, 1],
        [1, 2, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 2, 1],
        [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
        [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
        [1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1],
        [1, 3, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 3, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
];

class SoundManager {
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.enabled = true;
    }
    resume() { if (this.ctx.state === 'suspended') this.ctx.resume(); }
    playTone(freq, type, duration, vol = 0.1) {
        if (!this.enabled) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(vol, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }
    playWaka() { this.playTone(200, 'triangle', 0.1, 0.1); }
    playEatGhost() { this.playTone(600, 'square', 0.1, 0.2); setTimeout(() => this.playTone(800, 'square', 0.2, 0.2), 100); }
    playEatPower() { this.playTone(400, 'sine', 0.3, 0.2); setTimeout(() => this.playTone(600, 'sine', 0.3, 0.2), 150); }
    playDie() { for (let i = 0; i < 10; i++) setTimeout(() => this.playTone(400 - i * 40, 'sawtooth', 0.1, 0.2), i * 50); }
    playWin() { [300, 400, 500, 600, 800].forEach((freq, i) => setTimeout(() => this.playTone(freq, 'square', 0.2, 0.1), i * 100)); }
    playFruit() { this.playTone(1000, 'sine', 0.1, 0.3); setTimeout(() => this.playTone(1500, 'sine', 0.2, 0.3), 100); }
}

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.life = 60;
        this.size = Math.random() * 3 + 2;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        this.size *= 0.95;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

class GameMap {
    constructor(cols, rows, tileSize, layoutIndex) {
        this.cols = cols;
        this.rows = rows;
        this.tileSize = tileSize;
        this.grid = [];
        this.layoutIndex = layoutIndex;
        this.generateLevel();
    }
    generateLevel() {
        const layout = MAP_LAYOUTS[this.layoutIndex % MAP_LAYOUTS.length];
        this.grid = layout.map(row => [...row]);
    }
    isWall(col, row) {
        if (row === 6 && (col < 0 || col >= this.cols)) return false; // Tunnel
        if (col < 0 || col >= this.cols || row < 0 || row >= this.rows) return true;
        return this.grid[row][col] === 1;
    }
    eatPellet(col, row) {
        if (col >= 0 && col < this.cols && row >= 0 && row < this.rows) {
            const tile = this.grid[row][col];
            if (tile === 2 || tile === 3 || tile === 4) {
                this.grid[row][col] = 0;
                return tile;
            }
        }
        return 0;
    }
    spawnFruit() {
        if (this.grid[7][7] === 0) { this.grid[7][7] = 4; return true; }
        return false;
    }
    draw(ctx) {
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const tile = this.grid[r][c];
                const x = c * this.tileSize;
                const y = r * this.tileSize;
                if (tile === 1) {
                    ctx.fillStyle = '#89CFF0';
                    this.roundRect(ctx, x + 2, y + 2, this.tileSize - 4, this.tileSize - 4, 8, true);
                } else if (tile === 2) {
                    ctx.fillStyle = '#FFD700';
                    ctx.beginPath(); ctx.arc(x + this.tileSize / 2, y + this.tileSize / 2, this.tileSize / 6, 0, Math.PI * 2); ctx.fill();
                } else if (tile === 3) {
                    ctx.fillStyle = '#FFD700';
                    ctx.beginPath(); ctx.arc(x + this.tileSize / 2, y + this.tileSize / 2, this.tileSize / 3, 0, Math.PI * 2); ctx.fill();
                } else if (tile === 4) {
                    ctx.fillStyle = '#FF0000';
                    ctx.beginPath(); ctx.arc(x + this.tileSize / 2, y + this.tileSize / 2 + 2, this.tileSize / 4, 0, Math.PI * 2); ctx.fill();
                    ctx.fillStyle = '#00FF00'; ctx.fillRect(x + this.tileSize / 2 - 1, y + 4, 2, 10);
                }
            }
        }
    }
    roundRect(ctx, x, y, width, height, radius, fill) {
        if (typeof radius === 'undefined') radius = 5;
        ctx.beginPath(); ctx.moveTo(x + radius, y); ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius); ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height); ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius); ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y); ctx.closePath(); if (fill) ctx.fill();
    }
}

class Player {
    constructor(map, tileSize) {
        this.map = map;
        this.tileSize = tileSize;
        this.resetPosition();
        this.speed = 2.5;
        this.nextDir = { x: 0, y: 0 };
        this.mouthOpen = 0;
        this.mouthSpeed = 0.1;
    }
    resetPosition() {
        this.x = 1 * this.tileSize + this.tileSize / 2;
        this.y = 1 * this.tileSize + this.tileSize / 2;
        this.dir = { x: 0, y: 0 };
        this.radius = this.tileSize / 2 - 4;
    }
    update() {
        const col = Math.floor(this.x / this.tileSize);
        const row = Math.floor(this.y / this.tileSize);
        const centerX = col * this.tileSize + this.tileSize / 2;
        const centerY = row * this.tileSize + this.tileSize / 2;
        const dist = Math.sqrt((this.x - centerX) ** 2 + (this.y - centerY) ** 2);

        if (this.x < -this.tileSize / 2) this.x = this.map.cols * this.tileSize + this.tileSize / 2;
        else if (this.x > this.map.cols * this.tileSize + this.tileSize / 2) this.x = -this.tileSize / 2;

        if (dist < this.speed) {
            this.x = centerX; this.y = centerY;
            if (this.nextDir.x !== 0 || this.nextDir.y !== 0) {
                if (!this.map.isWall(col + this.nextDir.x, row + this.nextDir.y)) {
                    this.dir = { ...this.nextDir };
                    this.nextDir = { x: 0, y: 0 };
                }
            }
            if (this.map.isWall(col + this.dir.x, row + this.dir.y)) this.dir = { x: 0, y: 0 };
        }
        this.x += this.dir.x * this.speed;
        this.y += this.dir.y * this.speed;
        this.mouthOpen += this.mouthSpeed;
        if (this.mouthOpen > 0.2 * Math.PI || this.mouthOpen < 0) this.mouthSpeed = -this.mouthSpeed;
    }
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        if (this.dir.x === -1) ctx.scale(-1, 1);
        ctx.fillStyle = '#FFB7B2'; ctx.beginPath(); ctx.arc(0, 0, this.radius, 0, Math.PI * 2); ctx.fill(); // Body
        ctx.fillStyle = '#FFB7B2'; ctx.beginPath(); ctx.moveTo(-10, -10); ctx.lineTo(-15, -22); ctx.lineTo(-5, -14); ctx.fill(); // Left Ear
        ctx.beginPath(); ctx.moveTo(10, -10); ctx.lineTo(15, -22); ctx.lineTo(5, -14); ctx.fill(); // Right Ear
        ctx.fillStyle = '#FF6961'; ctx.globalAlpha = 0.6; ctx.beginPath(); ctx.arc(-8, 2, 3, 0, Math.PI * 2); ctx.arc(8, 2, 3, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1.0; // Blush
        ctx.fillStyle = '#4A4A4A'; ctx.beginPath(); ctx.arc(-6, -4, 2.5, 0, Math.PI * 2); ctx.arc(6, -4, 2.5, 0, Math.PI * 2); ctx.fill(); // Eyes
        ctx.fillStyle = '#FFFFFF'; ctx.beginPath(); ctx.arc(-5, -5, 1, 0, Math.PI * 2); ctx.arc(7, -5, 1, 0, Math.PI * 2); ctx.fill(); // Sparkle
        ctx.fillStyle = '#9E2A2B'; ctx.beginPath(); const mouthSize = 2 + Math.sin(this.mouthOpen * 5) * 2; ctx.arc(0, 5, mouthSize, 0, Math.PI * 2); ctx.fill(); // Mouth
        ctx.restore();
    }
}

class MovingWall {
    constructor(tileSize, x1, y1, x2, y2, speed) {
        this.tileSize = tileSize;
        this.x = x1 * tileSize; this.y = y1 * tileSize;
        this.start = { x: x1 * tileSize, y: y1 * tileSize };
        this.end = { x: x2 * tileSize, y: y2 * tileSize };
        this.speed = speed; this.toEnd = true;
        const dx = this.end.x - this.start.x; const dy = this.end.y - this.start.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        this.vx = (dx / dist) * speed; this.vy = (dy / dist) * speed;
    }
    update() {
        if (this.toEnd) {
            this.x += this.vx; this.y += this.vy;
            const d = Math.sqrt((this.x - this.start.x) ** 2 + (this.y - this.start.y) ** 2);
            const totalD = Math.sqrt((this.end.x - this.start.x) ** 2 + (this.end.y - this.start.y) ** 2);
            if (d >= totalD) { this.x = this.end.x; this.y = this.end.y; this.toEnd = false; }
        } else {
            this.x -= this.vx; this.y -= this.vy;
            const d = Math.sqrt((this.x - this.end.x) ** 2 + (this.y - this.end.y) ** 2);
            const totalD = Math.sqrt((this.end.x - this.start.x) ** 2 + (this.end.y - this.start.y) ** 2);
            if (d >= totalD) { this.x = this.start.x; this.y = this.start.y; this.toEnd = true; }
        }
    }
    draw(ctx) {
        ctx.fillStyle = '#ff6b6b'; ctx.fillRect(this.x + 4, this.y + 4, this.tileSize - 8, this.tileSize - 8);
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.strokeRect(this.x + 8, this.y + 8, this.tileSize - 16, this.tileSize - 16);
    }
}

class Ghost {
    constructor(map, tileSize, x, y, color, speed, behavior = 'RANDOM') {
        this.map = map; this.tileSize = tileSize;
        this.spawnX = x * tileSize + tileSize / 2; this.spawnY = y * tileSize + tileSize / 2;
        this.x = this.spawnX; this.y = this.spawnY;
        this.color = color; this.radius = tileSize / 2 - 4;
        this.normalSpeed = speed; this.speed = speed;
        this.dir = { x: 0, y: 0 }; this.behavior = behavior;
        this.scared = false; this.changeDirection();
    }
    changeDirection() {
        const dirs = [{ x: 0, y: -1 }, { x: 0, y: 1 }, { x: -1, y: 0 }, { x: 1, y: 0 }];
        this.dir = dirs[Math.floor(Math.random() * dirs.length)];
    }
    resetPosition() { this.x = this.spawnX; this.y = this.spawnY; this.scared = false; this.speed = this.normalSpeed; this.changeDirection(); }
    setScared(isScared) { this.scared = isScared; this.speed = isScared ? this.normalSpeed * 0.5 : (this.behavior === 'WALL_PASS' ? this.normalSpeed * 0.5 : this.normalSpeed); }
    update(player) {
        if (this.x < -this.tileSize / 2) this.x = this.map.cols * this.tileSize + this.tileSize / 2;
        else if (this.x > this.map.cols * this.tileSize + this.tileSize / 2) this.x = -this.tileSize / 2;

        if (this.behavior === 'SLEEP') {
            const distToPlayer = Math.sqrt((this.x - player.x) ** 2 + (this.y - player.y) ** 2);
            if (distToPlayer > 5 * this.tileSize) return; // Sleep
        }

        const col = Math.floor(this.x / this.tileSize);
        const row = Math.floor(this.y / this.tileSize);
        const centerX = col * this.tileSize + this.tileSize / 2;
        const centerY = row * this.tileSize + this.tileSize / 2;
        const dist = Math.sqrt((this.x - centerX) ** 2 + (this.y - centerY) ** 2);

        if (dist < this.speed) {
            this.x = centerX; this.y = centerY;
            const dirs = [{ x: 0, y: -1 }, { x: 0, y: 1 }, { x: -1, y: 0 }, { x: 1, y: 0 }];
            let validDirs = dirs.filter(d => {
                if (this.behavior === 'WALL_PASS') {
                    // Check bounds only
                    const nc = col + d.x; const nr = row + d.y;
                    return nc >= 0 && nc < this.map.cols && nr >= 0 && nr < this.map.rows;
                }
                return !this.map.isWall(col + d.x, row + d.y);
            });
            const nonReverseDirs = validDirs.filter(d => d.x !== -this.dir.x || d.y !== -this.dir.y);
            let options = nonReverseDirs.length > 0 ? nonReverseDirs : validDirs;

            if (options.length > 0) {
                if (this.scared) {
                    const pCol = Math.floor(player.x / this.tileSize); const pRow = Math.floor(player.y / this.tileSize);
                    options.sort((a, b) => {
                        const distA = (col + a.x - pCol) ** 2 + (row + a.y - pRow) ** 2;
                        const distB = (col + b.x - pCol) ** 2 + (row + b.y - pRow) ** 2;
                        return distB - distA;
                    });
                    this.dir = options[0];
                } else if ((this.behavior === 'CHASE' || this.behavior === 'SLEEP') && player) {
                    const pCol = Math.floor(player.x / this.tileSize); const pRow = Math.floor(player.y / this.tileSize);
                    options.sort((a, b) => {
                        const distA = (col + a.x - pCol) ** 2 + (row + a.y - pRow) ** 2;
                        const distB = (col + b.x - pCol) ** 2 + (row + b.y - pRow) ** 2;
                        return distA - distB;
                    });
                    this.dir = options[0];
                } else {
                    this.dir = options[Math.floor(Math.random() * options.length)];
                }
            } else { this.dir = { x: 0, y: 0 }; }
        }
        this.x += this.dir.x * this.speed; this.y += this.dir.y * this.speed;
    }
    draw(ctx) {
        ctx.fillStyle = this.scared ? '#0000FF' : this.color;
        if (this.behavior === 'WALL_PASS' && !this.scared) ctx.globalAlpha = 0.6;
        ctx.beginPath(); ctx.arc(this.x, this.y - 2, this.radius, Math.PI, 0);
        ctx.lineTo(this.x + this.radius, this.y + this.radius);
        for (let i = 1; i <= 3; i++) ctx.lineTo(this.x + this.radius - (2 * this.radius / 3) * i, this.y + this.radius - (i % 2 == 0 ? 0 : 3));
        ctx.lineTo(this.x - this.radius, this.y + this.radius); ctx.fill();
        ctx.globalAlpha = 1.0;

        ctx.fillStyle = 'white'; ctx.beginPath(); ctx.arc(this.x - 4, this.y - 4, 4, 0, Math.PI * 2); ctx.arc(this.x + 4, this.y - 4, 4, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'black'; ctx.beginPath(); ctx.arc(this.x - 4 + this.dir.x * 2, this.y - 4 + this.dir.y * 2, 2, 0, Math.PI * 2); ctx.arc(this.x + 4 + this.dir.x * 2, this.y - 4 + this.dir.y * 2, 2, 0, Math.PI * 2); ctx.fill();

        if ((this.behavior === 'CHASE' || this.behavior === 'SLEEP') && !this.scared) {
            ctx.strokeStyle = 'black'; ctx.lineWidth = 2; ctx.beginPath();
            ctx.moveTo(this.x - 7, this.y - 10); ctx.lineTo(this.x - 2, this.y - 6);
            ctx.moveTo(this.x + 7, this.y - 10); ctx.lineTo(this.x + 2, this.y - 6); ctx.stroke();
        }
        if (this.behavior === 'SLEEP' && !this.scared) {
            ctx.fillStyle = '#000'; ctx.font = '10px Arial'; ctx.fillText('zZ', this.x + 8, this.y - 8);
        }
        if (this.scared) {
            ctx.strokeStyle = '#FFB7B2'; ctx.beginPath(); ctx.moveTo(this.x - 6, this.y + 6); ctx.lineTo(this.x - 2, this.y + 2); ctx.lineTo(this.x + 2, this.y + 6); ctx.lineTo(this.x + 6, this.y + 2); ctx.stroke();
        }
    }
}

class FloatingText {
    constructor(x, y, text, color) { this.x = x; this.y = y; this.text = text; this.color = color; this.life = 40; this.dy = -1; }
    update() { this.y += this.dy; this.life--; }
    draw(ctx) { ctx.fillStyle = this.color; ctx.font = 'bold 16px "Fredoka One"'; ctx.fillText(this.text, this.x, this.y); }
}

class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.tileSize = 40; this.cols = 15; this.rows = 15;
        this.sound = new SoundManager();
        this.highScore = parseInt(localStorage.getItem('highScore')) || 0;
        this.state = 'MENU'; // MENU, PLAYING, PAUSED, GAMEOVER, WIN
        this.gameMode = 'CLASSIC'; // CLASSIC, TIME_ATTACK, NIGHT
        this.menuSelection = 0; // 0: Classic, 1: Time, 2: Night
        this.particles = [];
        this.shakeTimer = 0;

        this.initInput();
        this.loop = this.loop.bind(this);
        requestAnimationFrame(this.loop);
    }

    initInput() {
        console.log("Initializing input...");
        window.addEventListener('keydown', (e) => {
            console.log("Key pressed:", e.key, "State:", this.state);
            if (this.state === 'MENU') {
                if (e.key === 'ArrowUp') { e.preventDefault(); this.menuSelection = (this.menuSelection - 1 + 3) % 3; }
                if (e.key === 'ArrowDown') { e.preventDefault(); this.menuSelection = (this.menuSelection + 1) % 3; }
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    console.log("Starting game from keyboard...");
                    this.sound.resume();
                    this.startGame();
                }
            } else if (this.state === 'PLAYING') {
                if (e.key === 'p' || e.key === 'P') this.state = 'PAUSED';
                switch (e.key) {
                    case 'ArrowUp': e.preventDefault(); this.player.nextDir = { x: 0, y: -1 }; break;
                    case 'ArrowDown': e.preventDefault(); this.player.nextDir = { x: 0, y: 1 }; break;
                    case 'ArrowLeft': e.preventDefault(); this.player.nextDir = { x: -1, y: 0 }; break;
                    case 'ArrowRight': e.preventDefault(); this.player.nextDir = { x: 1, y: 0 }; break;
                }
            } else if (this.state === 'PAUSED') {
                if (e.key === 'p' || e.key === 'P') this.state = 'PLAYING';
            } else if (this.state === 'GAMEOVER' || this.state === 'WIN') {
                if (e.key === 'Enter' || e.key === ' ') {
                    this.state = 'MENU';
                }
            }
        });

        // Mouse Click
        this.canvas.addEventListener('click', (e) => {
            console.log("Canvas clicked. State:", this.state);
            if (this.state === 'MENU') {
                console.log("Starting game from click...");
                this.sound.resume(); // Ensure audio starts
                this.startGame();
            }
            if (this.state === 'GAMEOVER' || this.state === 'WIN') {
                this.state = 'MENU';
            }
        });

        // Mobile Controls
        let touchStartX = 0; let touchStartY = 0;
        this.canvas.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX; touchStartY = e.touches[0].clientY;
            if (this.state === 'MENU') {
                this.sound.resume();
                this.startGame();
            }
            if (this.state === 'GAMEOVER' || this.state === 'WIN') this.state = 'MENU';
        });
        this.canvas.addEventListener('touchmove', (e) => {
            if (this.state !== 'PLAYING') return;
            e.preventDefault();
            const touchEndX = e.touches[0].clientX; const touchEndY = e.touches[0].clientY;
            const dx = touchEndX - touchStartX; const dy = touchEndY - touchStartY;
            if (Math.abs(dx) > Math.abs(dy)) {
                if (Math.abs(dx) > 30) this.player.nextDir = dx > 0 ? { x: 1, y: 0 } : { x: -1, y: 0 };
            } else {
                if (Math.abs(dy) > 30) this.player.nextDir = dy > 0 ? { x: 0, y: 1 } : { x: 0, y: -1 };
            }
        });
    }

    startGame() {
        const modes = ['CLASSIC', 'TIME_ATTACK', 'NIGHT'];
        this.gameMode = modes[this.menuSelection];
        this.level = 1; this.lives = 3; this.score = 0;
        this.initLevel();
    }

    initLevel() {
        this.map = new GameMap(this.cols, this.rows, this.tileSize, this.level - 1);
        this.player = new Player(this.map, this.tileSize);

        const baseSpeed = 2; const speedIncrement = 0.2;
        const ghostSpeed = Math.min(baseSpeed + (this.level - 1) * speedIncrement, 4.5);
        const ghostCount = Math.min(3 + (this.level - 1), 10);

        this.ghosts = [];
        const ghostColors = ['#FFB7B2', '#B5EAD7', '#C7CEEA', '#FF9AA2', '#E2F0CB', '#B5EAD7', '#C7CEEA'];
        const occupiedTiles = new Set();
        const pCol = Math.floor(this.player.x / this.tileSize); const pRow = Math.floor(this.player.y / this.tileSize);

        for (let i = 0; i < ghostCount; i++) {
            const color = ghostColors[i % ghostColors.length];
            let spawnX, spawnY, valid = false, attempts = 0;
            while (!valid && attempts < 100) {
                spawnX = Math.floor(Math.random() * this.cols); spawnY = Math.floor(Math.random() * this.rows);
                if (this.map.isWall(spawnX, spawnY)) { attempts++; continue; }
                if (Math.sqrt((spawnX - pCol) ** 2 + (spawnY - pRow) ** 2) < 5) { attempts++; continue; }
                if (occupiedTiles.has(`${spawnX},${spawnY}`)) { attempts++; continue; }
                valid = true;
            }
            if (!valid) { spawnX = 7; spawnY = 7; }
            occupiedTiles.add(`${spawnX},${spawnY}`);

            let behavior = 'RANDOM';
            if (this.level >= 2 && i < Math.floor((this.level + 1) / 3)) behavior = 'CHASE';
            // Special Enemies
            if (this.level >= 3 && i === ghostCount - 1) behavior = 'WALL_PASS';
            if (this.level >= 4 && i === ghostCount - 2) behavior = 'SLEEP';

            const ghost = new Ghost(this.map, this.tileSize, spawnX, spawnY, color, ghostSpeed, behavior);
            let dirAttempts = 0;
            while (this.map.isWall(spawnX + ghost.dir.x, spawnY + ghost.dir.y) && dirAttempts < 10 && behavior !== 'WALL_PASS') {
                ghost.changeDirection(); dirAttempts++;
            }
            this.ghosts.push(ghost);
        }

        this.movingWalls = [];
        if (this.level >= 2) this.movingWalls.push(new MovingWall(this.tileSize, 5, 7, 9, 7, 2));
        if (this.level >= 3) this.movingWalls.push(new MovingWall(this.tileSize, 7, 5, 7, 9, 2));

        this.state = 'PLAYING';
        this.floatingTexts = []; this.scaredTimer = 0; this.fruitTimer = 600;
        this.timeLeft = 60; // 60 seconds for Time Attack

        this.totalPellets = 0;
        for (let r = 0; r < this.rows; r++) for (let c = 0; c < this.cols; c++) if (this.map.grid[r][c] === 2 || this.map.grid[r][c] === 3) this.totalPellets++;
    }

    spawnParticles(x, y, color, count) {
        for (let i = 0; i < count; i++) this.particles.push(new Particle(x, y, color));
    }

    handleDeath() {
        this.lives--; this.sound.playDie(); this.shakeTimer = 20;
        this.spawnParticles(this.player.x, this.player.y, '#FFB7B2', 20);
        if (this.lives > 0) {
            this.player.resetPosition(); this.ghosts.forEach(g => g.resetPosition());
            this.floatingTexts.push(new FloatingText(this.canvas.width / 2, this.canvas.height / 2, "Oups!", "#FF0000"));
        } else {
            this.state = 'GAMEOVER';
            if (this.score > this.highScore) { this.highScore = this.score; localStorage.setItem('highScore', this.highScore); }
        }
    }

    nextLevel() {
        this.level++; this.sound.playWin(); this.state = 'WIN';
    }

    update(dt) {
        if (this.state !== 'PLAYING') return;

        if (this.gameMode === 'TIME_ATTACK') {
            if (this.timeLeft > 0) this.timeLeft -= dt / 1000;
            else this.handleDeath();
        }

        if (this.shakeTimer > 0) this.shakeTimer--;

        this.player.update();
        this.ghosts.forEach(g => g.update(this.player));
        this.movingWalls.forEach(w => w.update());
        this.floatingTexts.forEach(ft => ft.update()); this.floatingTexts = this.floatingTexts.filter(ft => ft.life > 0);
        this.particles.forEach(p => p.update()); this.particles = this.particles.filter(p => p.life > 0);

        if (this.scaredTimer > 0) { this.scaredTimer--; if (this.scaredTimer === 0) this.ghosts.forEach(g => g.setScared(false)); }
        if (this.fruitTimer > 0) { this.fruitTimer--; if (this.fruitTimer === 0) if (this.map.spawnFruit()) this.floatingTexts.push(new FloatingText(7 * this.tileSize, 7 * this.tileSize, "Fruit!", "#FF0000")); }

        const pCol = Math.floor(this.player.x / this.tileSize); const pRow = Math.floor(this.player.y / this.tileSize);
        const eaten = this.map.eatPellet(pCol, pRow);

        if (eaten === 2) {
            this.score += 10; this.totalPellets--; this.sound.playWaka();
            if (this.totalPellets === 0) this.nextLevel();
        } else if (eaten === 3) {
            this.score += 50; this.totalPellets--; this.scaredTimer = 600;
            this.ghosts.forEach(g => g.setScared(true)); this.sound.playEatPower();
            this.floatingTexts.push(new FloatingText(this.player.x, this.player.y, 'POWER!', '#00FFFF'));
            if (this.totalPellets === 0) this.nextLevel();
        } else if (eaten === 4) {
            this.score += 500; this.sound.playFruit(); this.spawnParticles(this.player.x, this.player.y, '#FF0000', 10);
            this.floatingTexts.push(new FloatingText(this.player.x, this.player.y, '+500', '#FF00FF'));
        }

        for (let ghost of this.ghosts) {
            if (Math.sqrt((this.player.x - ghost.x) ** 2 + (this.player.y - ghost.y) ** 2) < this.tileSize / 2 + ghost.radius - 5) {
                if (ghost.scared) {
                    ghost.resetPosition(); this.score += 200; this.sound.playEatGhost();
                    this.spawnParticles(ghost.x, ghost.y, ghost.color, 15);
                    this.floatingTexts.push(new FloatingText(this.player.x, this.player.y, '+200', '#0000FF'));
                    if (this.gameMode === 'TIME_ATTACK') { this.timeLeft += 5; this.floatingTexts.push(new FloatingText(this.player.x, this.player.y - 20, '+5s', '#00FF00')); }
                } else { this.handleDeath(); }
            }
        }
        for (let wall of this.movingWalls) {
            const pSize = this.player.radius * 2; const px = this.player.x - this.player.radius; const py = this.player.y - this.player.radius;
            const wx = wall.x + 4; const wy = wall.y + 4; const wSize = wall.tileSize - 8;
            if (px < wx + wSize && px + pSize > wx && py < wy + wSize && py + pSize > wy) this.handleDeath();
        }
    }

    draw() {
        this.ctx.save();
        if (this.shakeTimer > 0) this.ctx.translate(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5);

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.state === 'MENU') {
            this.ctx.fillStyle = '#89CFF0'; this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = '#fff'; this.ctx.font = '50px "Fredoka One"'; this.ctx.textAlign = 'center';
            this.ctx.fillText('LE PETIT GLOUTON', this.canvas.width / 2, 150);
            this.ctx.font = '20px "Fredoka One"';
            this.ctx.fillText('Choisir le mode :', this.canvas.width / 2, 250);

            const modes = ['CLASSIQUE', 'CONTRE LA MONTRE', 'NUIT'];
            modes.forEach((mode, i) => {
                this.ctx.fillStyle = i === this.menuSelection ? '#FFEB3B' : '#fff';
                this.ctx.fillText(mode, this.canvas.width / 2, 300 + i * 40);
            });
            this.ctx.fillStyle = '#fff';
            this.ctx.fillText('Appuyez sur ESPACE ou TOUCHEZ pour commencer', this.canvas.width / 2, 500);
            this.ctx.textAlign = 'left';
            this.ctx.restore();
            return;
        }

        this.map.draw(this.ctx);
        this.movingWalls.forEach(w => w.draw(this.ctx));
        this.player.draw(this.ctx);
        this.ghosts.forEach(g => g.draw(this.ctx));
        this.particles.forEach(p => p.draw(this.ctx));
        this.floatingTexts.forEach(ft => ft.draw(this.ctx));

        if (this.gameMode === 'NIGHT') {
            this.ctx.fillStyle = 'black';
            this.ctx.beginPath();
            this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.arc(this.player.x, this.player.y, 150, 0, Math.PI * 2);
            this.ctx.fill('evenodd');
        }

        // HUD
        this.ctx.fillStyle = '#586e75'; this.ctx.font = '20px "Fredoka One"';
        this.ctx.fillText(`Score: ${this.score}`, 10, 25);
        this.ctx.fillText(`High Score: ${this.highScore}`, 150, 25);
        this.ctx.fillText(`Niveau: ${this.level}`, 500, 25);
        if (this.gameMode === 'TIME_ATTACK') {
            this.ctx.fillStyle = this.timeLeft < 10 ? '#FF0000' : '#586e75';
            this.ctx.fillText(`Temps: ${Math.ceil(this.timeLeft)}`, 300, 25);
        }
        for (let i = 0; i < this.lives; i++) {
            this.ctx.fillStyle = '#FFEB3B'; this.ctx.beginPath(); this.ctx.arc(400 + i * 25, 20, 10, 0.2 * Math.PI, 1.8 * Math.PI); this.ctx.lineTo(400 + i * 25, 20); this.ctx.fill();
        }

        if (this.state === 'PAUSED') {
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'; this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = '#fff'; this.ctx.font = '40px "Fredoka One"'; this.ctx.textAlign = 'center';
            this.ctx.fillText('PAUSE', this.canvas.width / 2, this.canvas.height / 2); this.ctx.textAlign = 'left';
        } else if (this.state === 'GAMEOVER') {
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'; this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = '#ff6b6b'; this.ctx.font = '50px "Fredoka One"'; this.ctx.textAlign = 'center';
            this.ctx.fillText('PERDU !', this.canvas.width / 2, this.canvas.height / 2);
            this.ctx.fillStyle = '#fff'; this.ctx.font = '20px "Fredoka One"';
            this.ctx.fillText(`Score Final: ${this.score}`, this.canvas.width / 2, this.canvas.height / 2 + 40);
            this.ctx.fillText('Appuie sur Espace pour Menu', this.canvas.width / 2, this.canvas.height / 2 + 80); this.ctx.textAlign = 'left';
        } else if (this.state === 'WIN') {
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'; this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = '#4CAF50'; this.ctx.font = '50px "Fredoka One"'; this.ctx.textAlign = 'center';
            this.ctx.fillText('NIVEAU TERMINÉ !', this.canvas.width / 2, this.canvas.height / 2);
            this.ctx.fillStyle = '#586e75'; this.ctx.font = '20px "Fredoka One"';
            this.ctx.fillText(`Score: ${this.score}`, this.canvas.width / 2, this.canvas.height / 2 + 40);
            this.ctx.fillText('Appuie sur Espace pour le niveau suivant', this.canvas.width / 2, this.canvas.height / 2 + 70); this.ctx.textAlign = 'left';
        }

        this.ctx.restore();
    }

    loop(timestamp) {
        try {
            const dt = timestamp - this.lastTime; this.lastTime = timestamp;
            this.update(dt); this.draw();
            requestAnimationFrame(this.loop);
        } catch (e) {
            console.error("Game Loop Error:", e);
            alert("Une erreur est survenue : " + e.message);
        }
    }
}

window.onload = () => { try { new Game(); } catch (e) { console.error(e); alert(e.message); } };
