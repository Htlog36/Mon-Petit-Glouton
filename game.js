/**
 * Le Petit Glouton - Expert Edition
 */

const MAP_LAYOUTS = [
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
        this.bgmTimer = null;
        this.tempo = 200;
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
    playDie() { this.stopMusic(); for (let i = 0; i < 10; i++) setTimeout(() => this.playTone(400 - i * 40, 'sawtooth', 0.1, 0.2), i * 50); }
    playWin() { this.stopMusic();[300, 400, 500, 600, 800].forEach((freq, i) => setTimeout(() => this.playTone(freq, 'square', 0.2, 0.1), i * 100)); }
    playFruit() { this.playTone(1000, 'sine', 0.1, 0.3); setTimeout(() => this.playTone(1500, 'sine', 0.2, 0.3), 100); }
    playBonus() { this.playTone(1200, 'square', 0.1, 0.2); setTimeout(() => this.playTone(1800, 'square', 0.2, 0.2), 100); }
    startMusic() {
        if (!this.enabled || this.bgmTimer) return;
        let note = 0;
        const notes = [150, 0, 150, 0, 200, 0, 180, 0];
        const playStep = () => {
            if (notes[note] > 0) this.playTone(notes[note], 'triangle', 0.1, 0.05);
            note = (note + 1) % notes.length;
            this.bgmTimer = setTimeout(playStep, this.tempo);
        };
        playStep();
    }
    stopMusic() { if (this.bgmTimer) { clearTimeout(this.bgmTimer); this.bgmTimer = null; } }
    setTempo(fast) { this.tempo = fast ? 150 : 250; }
}

class Particle {
    constructor(x, y, color) {
        this.x = x; this.y = y; this.color = color;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1;
        this.vx = Math.cos(angle) * speed; this.vy = Math.sin(angle) * speed;
        this.life = 60; this.size = Math.random() * 3 + 2;
    }
    update() { this.x += this.vx; this.y += this.vy; this.life--; this.size *= 0.95; }
    draw(ctx) { ctx.fillStyle = this.color; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); }
}

class Bonus {
    constructor(x, y, type) {
        this.x = x; this.y = y; this.type = type; this.life = 600;
    }
    draw(ctx) {
        ctx.save(); ctx.translate(this.x, this.y); ctx.beginPath();
        if (this.type === 'SPEED') { ctx.fillStyle = '#FFEB3B'; ctx.moveTo(0, -8); ctx.lineTo(5, 0); ctx.lineTo(0, 8); ctx.lineTo(-5, 0); }
        else if (this.type === 'ICE') { ctx.fillStyle = '#00FFFF'; ctx.rect(-5, -5, 10, 10); }
        else if (this.type === 'SHIELD') { ctx.fillStyle = '#00FF00'; ctx.arc(0, 0, 6, 0, Math.PI * 2); }
        ctx.fill(); ctx.restore();
    }
}

class Boss {
    constructor(map, tileSize) {
        this.map = map; this.tileSize = tileSize;
        this.x = 7 * tileSize + tileSize / 2; this.y = 7 * tileSize + tileSize / 2;
        this.hp = 3; this.radius = tileSize; this.angle = 0;
        this.vulnerable = false;
    }
    update(players) {
        this.angle += 0.05;
        this.x += Math.cos(this.angle) * 2; this.y += Math.sin(this.angle) * 2;
    }
    draw(ctx) {
        ctx.save(); ctx.translate(this.x, this.y);
        ctx.fillStyle = this.vulnerable ? '#0000FF' : '#FF0000';
        ctx.beginPath(); ctx.arc(0, 0, this.radius, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#FFF'; ctx.font = '20px Arial'; ctx.fillText(this.hp, -5, 5);
        ctx.restore();
    }
}

class GameMap {
    constructor(cols, rows, tileSize, layoutIndex) {
        this.cols = cols; this.rows = rows; this.tileSize = tileSize;
        this.grid = []; this.layoutIndex = layoutIndex;
        this.generateLevel();
    }
    generateLevel() {
        const layout = MAP_LAYOUTS[this.layoutIndex % MAP_LAYOUTS.length];
        this.grid = layout.map(row => [...row]);
    }
    isWall(col, row) {
        if (row === 6 && (col < 0 || col >= this.cols)) return false;
        if (col < 0 || col >= this.cols || row < 0 || row >= this.rows) return true;
        return this.grid[row][col] === 1;
    }
    eatPellet(col, row) {
        if (col >= 0 && col < this.cols && row >= 0 && row < this.rows) {
            const tile = this.grid[row][col];
            if (tile === 2 || tile === 3 || tile === 4) {
                this.grid[row][col] = 0; return tile;
            }
        }
        return 0;
    }
    spawnFruit() { if (this.grid[7][7] === 0) { this.grid[7][7] = 4; return true; } return false; }
    draw(ctx) {
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                const tile = this.grid[r][c];
                const x = c * this.tileSize; const y = r * this.tileSize;
                if (tile === 1) {
                    ctx.fillStyle = '#89CFF0'; ctx.beginPath(); ctx.roundRect(x + 2, y + 2, this.tileSize - 4, this.tileSize - 4, 8); ctx.fill();
                } else if (tile === 2) {
                    ctx.fillStyle = '#FFD700'; ctx.beginPath(); ctx.arc(x + this.tileSize / 2, y + this.tileSize / 2, this.tileSize / 6, 0, Math.PI * 2); ctx.fill();
                } else if (tile === 3) {
                    ctx.fillStyle = '#FFD700'; ctx.beginPath(); ctx.arc(x + this.tileSize / 2, y + this.tileSize / 2, this.tileSize / 3, 0, Math.PI * 2); ctx.fill();
                } else if (tile === 4) {
                    ctx.fillStyle = '#FF0000'; ctx.beginPath(); ctx.arc(x + this.tileSize / 2, y + this.tileSize / 2 + 2, this.tileSize / 4, 0, Math.PI * 2); ctx.fill();
                    ctx.fillStyle = '#00FF00'; ctx.fillRect(x + this.tileSize / 2 - 1, y + 4, 2, 10);
                }
            }
        }
    }
}

class Player {
    constructor(map, tileSize, skin, controls) {
        this.map = map; this.tileSize = tileSize; this.skin = skin; this.controls = controls;
        this.resetPosition();
        this.baseSpeed = 2.5; this.speed = this.baseSpeed;
        this.nextDir = { x: 0, y: 0 }; this.mouthOpen = 0; this.mouthSpeed = 0.1; this.shielded = false;
        this.trail = [];
    }
    resetPosition() {
        this.x = 1 * this.tileSize + this.tileSize / 2;
        this.y = 1 * this.tileSize + this.tileSize / 2;
        this.dir = { x: 0, y: 0 }; this.radius = this.tileSize / 2 - 4;
        this.speed = this.baseSpeed; this.shielded = false; this.trail = [];
    }
    update() {
        // Trail
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > 5) this.trail.shift();

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
                    this.dir = { ...this.nextDir }; this.nextDir = { x: 0, y: 0 };
                }
            }
            if (this.map.isWall(col + this.dir.x, row + this.dir.y)) this.dir = { x: 0, y: 0 };
        }
        this.x += this.dir.x * this.speed; this.y += this.dir.y * this.speed;
        this.mouthOpen += this.mouthSpeed;
        if (this.mouthOpen > 0.2 * Math.PI || this.mouthOpen < 0) this.mouthSpeed = -this.mouthSpeed;
    }
    draw(ctx) {
        ctx.save();
        // Trail
        this.trail.forEach((t, i) => {
            ctx.globalAlpha = i / 5; ctx.fillStyle = '#FFB7B2'; ctx.beginPath(); ctx.arc(t.x, t.y, this.radius * 0.8, 0, Math.PI * 2); ctx.fill();
        });
        ctx.globalAlpha = 1.0;
        ctx.translate(this.x, this.y);
        if (this.dir.x === -1) ctx.scale(-1, 1);
        if (this.shielded) { ctx.strokeStyle = '#00FF00'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(0, 0, this.radius + 2, 0, Math.PI * 2); ctx.stroke(); }

        // Skins
        if (this.skin === 'ROBOT') {
            ctx.fillStyle = '#A0A0A0'; ctx.fillRect(-this.radius, -this.radius, this.radius * 2, this.radius * 2);
            ctx.fillStyle = '#FF0000'; ctx.fillRect(-2, -this.radius - 5, 4, 5);
        } else if (this.skin === 'RABBIT') {
            ctx.fillStyle = '#FFFFFF'; ctx.beginPath(); ctx.arc(0, 0, this.radius, 0, Math.PI * 2); ctx.fill();
            ctx.beginPath(); ctx.ellipse(-5, -15, 4, 10, -0.2, 0, Math.PI * 2); ctx.fill();
            ctx.beginPath(); ctx.ellipse(5, -15, 4, 10, 0.2, 0, Math.PI * 2); ctx.fill();
        } else if (this.skin === 'DOG') {
            ctx.fillStyle = '#D2691E'; ctx.beginPath(); ctx.arc(0, 0, this.radius, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#8B4513'; ctx.beginPath(); ctx.ellipse(-12, 0, 4, 8, 0, 0, Math.PI * 2); ctx.fill();
            ctx.beginPath(); ctx.ellipse(12, 0, 4, 8, 0, 0, Math.PI * 2); ctx.fill();
        } else { // CAT
            ctx.fillStyle = '#FFB7B2'; ctx.beginPath(); ctx.arc(0, 0, this.radius, 0, Math.PI * 2); ctx.fill();
            ctx.beginPath(); ctx.moveTo(-10, -10); ctx.lineTo(-15, -22); ctx.lineTo(-5, -14); ctx.fill();
            ctx.beginPath(); ctx.moveTo(10, -10); ctx.lineTo(15, -22); ctx.lineTo(5, -14); ctx.fill();
        }
        // Face
        ctx.fillStyle = '#000'; ctx.beginPath(); ctx.arc(-6, -4, 2.5, 0, Math.PI * 2); ctx.arc(6, -4, 2.5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#9E2A2B'; ctx.beginPath(); ctx.arc(0, 5, 2 + Math.sin(this.mouthOpen * 5) * 2, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
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
        this.scared = false; this.frozen = false; this.changeDirection();
    }
    changeDirection() {
        const dirs = [{ x: 0, y: -1 }, { x: 0, y: 1 }, { x: -1, y: 0 }, { x: 1, y: 0 }];
        this.dir = dirs[Math.floor(Math.random() * dirs.length)];
    }
    resetPosition() { this.x = this.spawnX; this.y = this.spawnY; this.scared = false; this.frozen = false; this.speed = this.normalSpeed; this.changeDirection(); }
    setScared(isScared) { this.scared = isScared; this.updateSpeed(); }
    setFrozen(isFrozen) { this.frozen = isFrozen; this.updateSpeed(); }
    updateSpeed() {
        if (this.frozen) this.speed = 0;
        else if (this.scared) this.speed = this.normalSpeed * 0.5;
        else if (this.behavior === 'WALL_PASS') this.speed = this.normalSpeed * 0.5;
        else this.speed = this.normalSpeed;
    }
    update(players) {
        if (this.frozen) return;
        if (this.x < -this.tileSize / 2) this.x = this.map.cols * this.tileSize + this.tileSize / 2;
        else if (this.x > this.map.cols * this.tileSize + this.tileSize / 2) this.x = -this.tileSize / 2;

        let target = players[0];
        let minDist = Infinity;
        players.forEach(p => {
            const d = Math.sqrt((this.x - p.x) ** 2 + (this.y - p.y) ** 2);
            if (d < minDist) { minDist = d; target = p; }
        });

        if (this.behavior === 'SLEEP' && minDist > 5 * this.tileSize) return;

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
                    const nc = col + d.x; const nr = row + d.y;
                    return nc >= 0 && nc < this.map.cols && nr >= 0 && nr < this.map.rows;
                }
                return !this.map.isWall(col + d.x, row + d.y);
            });
            const nonReverseDirs = validDirs.filter(d => d.x !== -this.dir.x || d.y !== -this.dir.y);
            let options = nonReverseDirs.length > 0 ? nonReverseDirs : validDirs;

            if (options.length > 0) {
                if (this.scared) {
                    const pCol = Math.floor(target.x / this.tileSize); const pRow = Math.floor(target.y / this.tileSize);
                    options.sort((a, b) => {
                        const distA = (col + a.x - pCol) ** 2 + (row + a.y - pRow) ** 2;
                        const distB = (col + b.x - pCol) ** 2 + (row + b.y - pRow) ** 2;
                        return distB - distA;
                    });
                    this.dir = options[0];
                } else if ((this.behavior === 'CHASE' || this.behavior === 'SLEEP') && target) {
                    const pCol = Math.floor(target.x / this.tileSize); const pRow = Math.floor(target.y / this.tileSize);
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
        ctx.fillStyle = this.scared ? '#0000FF' : (this.frozen ? '#00FFFF' : this.color);
        if (this.behavior === 'WALL_PASS' && !this.scared) ctx.globalAlpha = 0.6;
        ctx.beginPath(); ctx.arc(this.x, this.y - 2, this.radius, Math.PI, 0);
        ctx.lineTo(this.x + this.radius, this.y + this.radius);
        for (let i = 1; i <= 3; i++) ctx.lineTo(this.x + this.radius - (2 * this.radius / 3) * i, this.y + this.radius - (i % 2 == 0 ? 0 : 3));
        ctx.lineTo(this.x - this.radius, this.y + this.radius); ctx.fill();
        ctx.globalAlpha = 1.0;
        ctx.fillStyle = 'white'; ctx.beginPath(); ctx.arc(this.x - 4, this.y - 4, 4, 0, Math.PI * 2); ctx.arc(this.x + 4, this.y - 4, 4, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = 'black'; ctx.beginPath(); ctx.arc(this.x - 4 + this.dir.x * 2, this.y - 4 + this.dir.y * 2, 2, 0, Math.PI * 2); ctx.arc(this.x + 4 + this.dir.x * 2, this.y - 4 + this.dir.y * 2, 2, 0, Math.PI * 2); ctx.fill();
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
        this.state = 'MENU'; this.gameMode = 'CLASSIC'; this.menuSelection = 0;
        this.skins = ['CAT', 'DOG', 'RABBIT', 'ROBOT']; this.skinIndex = 0;
        this.playerCount = 1;
        this.highScores = JSON.parse(localStorage.getItem('leaderboard')) || [];
        this.achievements = JSON.parse(localStorage.getItem('achievements')) || {
            'PACIFIST': { name: 'Pacifiste', desc: 'Niveau sans manger de fantôme', unlocked: false },
            'GOURMAND': { name: 'Gourmand', desc: 'Manger un fruit', unlocked: false },
            'FLASH': { name: 'Flash', desc: 'Niveau en < 45s', unlocked: false }
        };
        this.achievementQueue = [];
        this.particles = []; this.shakeTimer = 0;
        this.initInput();
        this.loop = this.loop.bind(this);
        requestAnimationFrame(this.loop);
    }

    initInput() {
        window.addEventListener('keydown', (e) => {
            if (this.state === 'MENU') {
                if (e.key === 'ArrowUp') { e.preventDefault(); this.menuSelection = (this.menuSelection - 1 + 3) % 3; }
                if (e.key === 'ArrowDown') { e.preventDefault(); this.menuSelection = (this.menuSelection + 1) % 3; }
                if (e.key === 'ArrowLeft') { e.preventDefault(); this.skinIndex = (this.skinIndex - 1 + this.skins.length) % this.skins.length; }
                if (e.key === 'ArrowRight') { e.preventDefault(); this.skinIndex = (this.skinIndex + 1) % this.skins.length; }
                if (e.key === 'Tab') { e.preventDefault(); this.playerCount = this.playerCount === 1 ? 2 : 1; }
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.sound.resume(); this.startGame(); }
            } else if (this.state === 'PLAYING') {
                if (e.key === 'p' || e.key === 'P') this.state = 'PAUSED';
                // P1
                if (this.players[0]) {
                    switch (e.key) {
                        case 'ArrowUp': e.preventDefault(); this.players[0].nextDir = { x: 0, y: -1 }; break;
                        case 'ArrowDown': e.preventDefault(); this.players[0].nextDir = { x: 0, y: 1 }; break;
                        case 'ArrowLeft': e.preventDefault(); this.players[0].nextDir = { x: -1, y: 0 }; break;
                        case 'ArrowRight': e.preventDefault(); this.players[0].nextDir = { x: 1, y: 0 }; break;
                    }
                }
                // P2
                if (this.players[1]) {
                    switch (e.key.toLowerCase()) {
                        case 'z': this.players[1].nextDir = { x: 0, y: -1 }; break;
                        case 's': this.players[1].nextDir = { x: 0, y: 1 }; break;
                        case 'q': this.players[1].nextDir = { x: -1, y: 0 }; break;
                        case 'd': this.players[1].nextDir = { x: 1, y: 0 }; break;
                    }
                }
            } else if (this.state === 'PAUSED') {
                if (e.key === 'p' || e.key === 'P') this.state = 'PLAYING';
            } else if (this.state === 'GAMEOVER') {
                if (e.key === 'Enter' || e.key === ' ') this.state = 'MENU';
            } else if (this.state === 'WIN') {
                if (e.key === 'Enter' || e.key === ' ') this.initLevel();
            }
        });

        this.canvas.addEventListener('click', () => {
            if (this.state === 'MENU') { this.sound.resume(); this.startGame(); }
            if (this.state === 'GAMEOVER') this.state = 'MENU';
            if (this.state === 'WIN') this.initLevel();
        });

        // Game Boy Controls
        const bindBtn = (id, action) => {
            const btn = document.getElementById(id);
            if (!btn) return;
            btn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                if (this.state === 'MENU' || this.state === 'GAMEOVER' || this.state === 'WIN') {
                    if (id === 'btn-a' || id === 'btn-b') { this.sound.resume(); if (this.state === 'MENU') this.startGame(); else if (this.state === 'GAMEOVER') this.state = 'MENU'; else this.initLevel(); }
                } else if (this.state === 'PLAYING' && this.players[0]) {
                    action();
                }
            });
        };

        bindBtn('btn-up', () => this.players[0].nextDir = { x: 0, y: -1 });
        bindBtn('btn-down', () => this.players[0].nextDir = { x: 0, y: 1 });
        bindBtn('btn-left', () => this.players[0].nextDir = { x: -1, y: 0 });
        bindBtn('btn-right', () => this.players[0].nextDir = { x: 1, y: 0 });
        bindBtn('btn-a', () => { /* Action A */ });
        bindBtn('btn-b', () => { if (this.state === 'PLAYING') this.state = 'PAUSED'; else if (this.state === 'PAUSED') this.state = 'PLAYING'; });
    }
}

pollGamepads() {
    const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (let i = 0; i < gamepads.length; i++) {
        const gp = gamepads[i];
        if (gp && this.players[i]) {
            if (gp.axes[1] < -0.5) this.players[i].nextDir = { x: 0, y: -1 };
            else if (gp.axes[1] > 0.5) this.players[i].nextDir = { x: 0, y: 1 };
            else if (gp.axes[0] < -0.5) this.players[i].nextDir = { x: -1, y: 0 };
            else if (gp.axes[0] > 0.5) this.players[i].nextDir = { x: 1, y: 0 };
        }
    }
}

startGame() {
    const modes = ['CLASSIC', 'TIME_ATTACK', 'NIGHT'];
    this.gameMode = modes[this.menuSelection];
    this.level = 1; this.lives = 3; this.score = 0;
    this.sound.startMusic();
    this.state = 'STORY';
}

initLevel() {
    this.map = new GameMap(this.cols, this.rows, this.tileSize, this.level - 1);
    this.players = [];
    this.players.push(new Player(this.map, this.tileSize, this.skins[this.skinIndex]));
    if (this.playerCount === 2) {
        const p2 = new Player(this.map, this.tileSize, 'DOG');
        p2.x += this.tileSize; // Offset P2
        this.players.push(p2);
    }

    const baseSpeed = 2; const speedIncrement = 0.2;
    const ghostSpeed = Math.min(baseSpeed + (this.level - 1) * speedIncrement, 4.5);
    const ghostCount = Math.min(3 + (this.level - 1), 10);

    this.ghosts = [];
    const ghostColors = ['#FFB7B2', '#B5EAD7', '#C7CEEA', '#FF9AA2', '#E2F0CB'];
    for (let i = 0; i < ghostCount; i++) {
        let spawnX = Math.floor(Math.random() * this.cols); let spawnY = Math.floor(Math.random() * this.rows);
        while (this.map.isWall(spawnX, spawnY)) { spawnX = Math.floor(Math.random() * this.cols); spawnY = Math.floor(Math.random() * this.rows); }
        let behavior = 'RANDOM';
        if (this.level >= 2 && i < 2) behavior = 'CHASE';
        if (this.level >= 3 && i === 2) behavior = 'WALL_PASS';
        this.ghosts.push(new Ghost(this.map, this.tileSize, spawnX, spawnY, ghostColors[i % 5], ghostSpeed, behavior));
    }

    this.movingWalls = [];
    if (this.level >= 2) this.movingWalls.push(new MovingWall(this.tileSize, 5, 7, 9, 7, 2));

    this.bonuses = [];
    this.boss = (this.level % 5 === 0) ? new Boss(this.map, this.tileSize) : null;

    this.state = 'PLAYING';
    this.floatingTexts = []; this.scaredTimer = 0; this.fruitTimer = 600; this.bonusTimer = 900;
    this.timeLeft = 60; this.levelStartTime = Date.now(); this.ghostsEaten = 0;

    this.totalPellets = 0;
    for (let r = 0; r < this.rows; r++) for (let c = 0; c < this.cols; c++) if (this.map.grid[r][c] === 2 || this.map.grid[r][c] === 3) this.totalPellets++;
}

spawnParticles(x, y, color, count) { for (let i = 0; i < count; i++) this.particles.push(new Particle(x, y, color)); }

unlockAchievement(id) {
    if (!this.achievements[id].unlocked) {
        this.achievements[id].unlocked = true;
        localStorage.setItem('achievements', JSON.stringify(this.achievements));
        this.achievementQueue.push(this.achievements[id].name);
        setTimeout(() => this.achievementQueue.shift(), 3000);
    }
}

handleDeath() {
    this.lives--; this.sound.playDie(); this.shakeTimer = 20;
    if (this.lives > 0) {
        this.players.forEach(p => p.resetPosition());
        this.ghosts.forEach(g => g.resetPosition());
    } else {
        this.state = 'GAMEOVER';
        this.checkLeaderboard();
    }
}

checkLeaderboard() {
    const lowestScore = this.highScores.length < 5 ? 0 : this.highScores[this.highScores.length - 1].score;
    if (this.score > lowestScore) {
        const name = prompt("Nouveau Record ! Entre ton nom (3 lettres) :", "AAA") || "AAA";
        this.highScores.push({ name: name.substring(0, 3).toUpperCase(), score: this.score });
        this.highScores.sort((a, b) => b.score - a.score);
        if (this.highScores.length > 5) this.highScores.pop();
        localStorage.setItem('leaderboard', JSON.stringify(this.highScores));
    }
}

nextLevel() {
    if (this.ghostsEaten === 0) this.unlockAchievement('PACIFIST');
    if ((Date.now() - this.levelStartTime) < 45000) this.unlockAchievement('FLASH');
    this.level++; this.sound.playWin(); this.state = 'WIN';
}

update(dt) {
    if (this.state === 'STORY') return;
    if (this.state !== 'PLAYING') return;
    this.pollGamepads();

    if (this.gameMode === 'TIME_ATTACK') { if (this.timeLeft > 0) this.timeLeft -= dt / 1000; else this.handleDeath(); }
    if (this.shakeTimer > 0) this.shakeTimer--;

    this.players.forEach(p => p.update());
    this.ghosts.forEach(g => g.update(this.players));
    this.movingWalls.forEach(w => w.update());
    if (this.boss) this.boss.update(this.players);
    this.floatingTexts.forEach(ft => ft.update()); this.floatingTexts = this.floatingTexts.filter(ft => ft.life > 0);
    this.particles.forEach(p => p.update()); this.particles = this.particles.filter(p => p.life > 0);

    if (this.scaredTimer > 0) { this.scaredTimer--; if (this.scaredTimer === 0) { this.ghosts.forEach(g => g.setScared(false)); if (this.boss) this.boss.vulnerable = false; } }
    if (this.fruitTimer > 0) { this.fruitTimer--; if (this.fruitTimer === 0) if (this.map.spawnFruit()) this.floatingTexts.push(new FloatingText(7 * this.tileSize, 7 * this.tileSize, "Fruit!", "#FF0000")); }

    if (this.bonusTimer > 0) {
        this.bonusTimer--;
        if (this.bonusTimer === 0) {
            const types = ['SPEED', 'ICE', 'SHIELD'];
            let bx, by; do { bx = Math.floor(Math.random() * this.cols); by = Math.floor(Math.random() * this.rows); } while (this.map.isWall(bx, by));
            this.bonuses.push(new Bonus(bx * this.tileSize + this.tileSize / 2, by * this.tileSize + this.tileSize / 2, types[Math.floor(Math.random() * types.length)]));
            this.bonusTimer = Math.random() * 600 + 600;
        }
    }
    this.bonuses.forEach(b => b.life--); this.bonuses = this.bonuses.filter(b => b.life > 0);

    this.players.forEach(player => {
        // Bonus Collision
        for (let i = this.bonuses.length - 1; i >= 0; i--) {
            const b = this.bonuses[i];
            if (Math.sqrt((player.x - b.x) ** 2 + (player.y - b.y) ** 2) < this.tileSize / 2) {
                this.sound.playBonus();
                if (b.type === 'SPEED') { player.speed *= 1.5; setTimeout(() => player.speed = player.baseSpeed, 5000); this.floatingTexts.push(new FloatingText(player.x, player.y, "Speed!", "#FFEB3B")); }
                else if (b.type === 'ICE') { this.ghosts.forEach(g => g.setFrozen(true)); setTimeout(() => this.ghosts.forEach(g => g.setFrozen(false)), 5000); this.floatingTexts.push(new FloatingText(player.x, player.y, "Freeze!", "#00FFFF")); }
                else if (b.type === 'SHIELD') { player.shielded = true; this.floatingTexts.push(new FloatingText(player.x, player.y, "Shield!", "#00FF00")); }
                this.bonuses.splice(i, 1);
            }
        }
        // Pellet Collision
        const pCol = Math.floor(player.x / this.tileSize); const pRow = Math.floor(player.y / this.tileSize);
        const eaten = this.map.eatPellet(pCol, pRow);
        if (eaten === 2) { this.score += 10; this.totalPellets--; this.sound.playWaka(); if (this.totalPellets === 0) this.nextLevel(); }
        else if (eaten === 3) { this.score += 50; this.totalPellets--; this.scaredTimer = 600; this.ghosts.forEach(g => g.setScared(true)); if (this.boss) this.boss.vulnerable = true; this.sound.playEatPower(); this.floatingTexts.push(new FloatingText(player.x, player.y, 'POWER!', '#00FFFF')); if (this.totalPellets === 0) this.nextLevel(); }
        else if (eaten === 4) { this.score += 500; this.sound.playFruit(); this.spawnParticles(player.x, player.y, '#FF0000', 10); this.floatingTexts.push(new FloatingText(player.x, player.y, '+500', '#FF00FF')); this.unlockAchievement('GOURMAND'); }
    });

    this.sound.setTempo(this.totalPellets < 10);

    // Ghost Collision
    for (let ghost of this.ghosts) {
        this.players.forEach(player => {
            if (Math.sqrt((player.x - ghost.x) ** 2 + (player.y - ghost.y) ** 2) < this.tileSize / 2 + ghost.radius - 5) {
                if (ghost.scared) {
                    ghost.resetPosition(); this.score += 200; this.sound.playEatGhost(); this.ghostsEaten++;
                    this.spawnParticles(ghost.x, ghost.y, ghost.color, 15);
                    this.floatingTexts.push(new FloatingText(player.x, player.y, '+200', '#0000FF'));
                } else if (player.shielded) {
                    player.shielded = false; this.sound.playBonus(); this.spawnParticles(player.x, player.y, '#00FF00', 10);
                    ghost.resetPosition();
                } else { this.handleDeath(); }
            }
        });
    }
    // Boss Collision
    if (this.boss) {
        this.players.forEach(player => {
            if (Math.sqrt((player.x - this.boss.x) ** 2 + (player.y - this.boss.y) ** 2) < this.tileSize + this.boss.radius) {
                if (this.boss.vulnerable) {
                    this.boss.hp--; this.boss.vulnerable = false; this.score += 1000; this.spawnParticles(this.boss.x, this.boss.y, '#FF0000', 30);
                    if (this.boss.hp <= 0) { this.boss = null; this.nextLevel(); }
                } else if (!player.shielded) { this.handleDeath(); }
            }
        });
    }
}

draw() {
    this.ctx.save();
    if (this.shakeTimer > 0) this.ctx.translate(Math.random() * 5 - 2.5, Math.random() * 5 - 2.5);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.state === 'MENU') {
        this.ctx.fillStyle = '#89CFF0'; this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = '#fff'; this.ctx.font = '50px "Fredoka One"'; this.ctx.textAlign = 'center';
        this.ctx.fillText('LE PETIT GLOUTON', this.canvas.width / 2, 100);
        this.ctx.font = '20px "Fredoka One"';
        this.ctx.fillText('Mode :', this.canvas.width / 2, 160);
        const modes = ['CLASSIQUE', 'CONTRE LA MONTRE', 'NUIT'];
        modes.forEach((mode, i) => { this.ctx.fillStyle = i === this.menuSelection ? '#FFEB3B' : '#fff'; this.ctx.fillText(mode, this.canvas.width / 2, 200 + i * 30); });
        this.ctx.fillStyle = '#fff';
        this.ctx.fillText('< Skin : ' + this.skins[this.skinIndex] + ' >', this.canvas.width / 2, 320);
        this.ctx.fillText(`Joueurs : ${this.playerCount} (Tab pour changer)`, this.canvas.width / 2, 360);
        this.ctx.fillText('Meilleurs Scores :', this.canvas.width / 2, 420);
        this.highScores.forEach((s, i) => { this.ctx.fillText(`${i + 1}. ${s.name} - ${s.score}`, this.canvas.width / 2, 450 + i * 20); });
        this.ctx.fillText('Appuyez sur ESPACE pour commencer', this.canvas.width / 2, 580);
        this.ctx.textAlign = 'left'; this.ctx.restore(); return;
    }

    if (this.state === 'STORY') {
        this.ctx.fillStyle = '#000'; this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = '#fff'; this.ctx.font = '24px "Fredoka One"'; this.ctx.textAlign = 'center';
        this.ctx.fillText("Le Roi Fantôme a volé les friandises !", this.canvas.width / 2, 250);
        this.ctx.fillText("À l'attaque !", this.canvas.width / 2, 300);
        this.ctx.font = '16px Arial'; this.ctx.fillText("Appuie sur ESPACE", this.canvas.width / 2, 500);
        if (this.sound.bgmTimer === null) this.sound.startMusic();
        window.addEventListener('keydown', (e) => { if (e.key === ' ') this.initLevel(); }, { once: true });
        this.ctx.restore(); return;
    }

    this.map.draw(this.ctx);
    this.movingWalls.forEach(w => w.draw(this.ctx));
    this.bonuses.forEach(b => b.draw(this.ctx));
    this.players.forEach(p => p.draw(this.ctx));
    this.ghosts.forEach(g => g.draw(this.ctx));
    if (this.boss) this.boss.draw(this.ctx);
    this.particles.forEach(p => p.draw(this.ctx));
    this.floatingTexts.forEach(ft => ft.draw(this.ctx));

    if (this.gameMode === 'NIGHT') {
        this.ctx.fillStyle = 'black'; this.ctx.beginPath(); this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.players.forEach(p => this.ctx.arc(p.x, p.y, 150, 0, Math.PI * 2));
        this.ctx.fill('evenodd');
    }

    this.ctx.fillStyle = '#586e75'; this.ctx.font = '20px "Fredoka One"';
    this.ctx.fillText(`Score: ${this.score}`, 10, 25); this.ctx.fillText(`Niveau: ${this.level}`, 500, 25);
    if (this.gameMode === 'TIME_ATTACK') { this.ctx.fillStyle = this.timeLeft < 10 ? '#FF0000' : '#586e75'; this.ctx.fillText(`Temps: ${Math.ceil(this.timeLeft)}`, 300, 25); }
    for (let i = 0; i < this.lives; i++) { this.ctx.fillStyle = '#FFEB3B'; this.ctx.beginPath(); this.ctx.arc(400 + i * 25, 20, 10, 0.2 * Math.PI, 1.8 * Math.PI); this.ctx.lineTo(400 + i * 25, 20); this.ctx.fill(); }

    if (this.achievementQueue.length > 0) {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'; this.ctx.fillRect(150, 50, 300, 50);
        this.ctx.fillStyle = '#FFD700'; this.ctx.textAlign = 'center'; this.ctx.fillText("Succès Débloqué !", 300, 70);
        this.ctx.fillStyle = '#FFF'; this.ctx.fillText(this.achievementQueue[0], 300, 90); this.ctx.textAlign = 'left';
    }

    if (this.state === 'PAUSED') {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'; this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = '#fff'; this.ctx.font = '40px "Fredoka One"'; this.ctx.textAlign = 'center'; this.ctx.fillText('PAUSE', this.canvas.width / 2, this.canvas.height / 2);
    } else if (this.state === 'GAMEOVER') {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'; this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = '#ff6b6b'; this.ctx.font = '50px "Fredoka One"'; this.ctx.textAlign = 'center'; this.ctx.fillText('PERDU !', this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.fillStyle = '#fff'; this.ctx.font = '20px "Fredoka One"'; this.ctx.fillText(`Score Final: ${this.score}`, this.canvas.width / 2, this.canvas.height / 2 + 40);
        this.ctx.fillText('Appuie sur Espace pour Menu', this.canvas.width / 2, this.canvas.height / 2 + 80);
    } else if (this.state === 'WIN') {
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'; this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = '#4CAF50'; this.ctx.font = '50px "Fredoka One"'; this.ctx.textAlign = 'center'; this.ctx.fillText('NIVEAU TERMINÉ !', this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.fillStyle = '#586e75'; this.ctx.font = '20px "Fredoka One"'; this.ctx.fillText(`Score: ${this.score}`, this.canvas.width / 2, this.canvas.height / 2 + 40);
        this.ctx.fillText('Appuie sur Espace pour le niveau suivant', this.canvas.width / 2, this.canvas.height / 2 + 70);
    }
    this.ctx.restore();
}
loop(timestamp) {
    try { const dt = timestamp - this.lastTime; this.lastTime = timestamp; this.update(dt); this.draw(); requestAnimationFrame(this.loop); }
    catch (e) { console.error("Game Loop Error:", e); alert("Une erreur est survenue : " + e.message); }
}
}

window.onload = () => { try { new Game(); } catch (e) { console.error(e); alert(e.message); } };
