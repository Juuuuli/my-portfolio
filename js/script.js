
  // =========================
  // 下拉選單
  // =========================

  const dropdowns = document.querySelectorAll(".dropdown-card");

  dropdowns.forEach(card => {

    const header = card.querySelector(".dropdown-header");

    header.addEventListener("click", () => {

      card.classList.toggle("active");

    });

  });

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('view-toggle-btn');
    const body = document.body;

    toggleBtn.addEventListener('click', () => {
        // 切換 force-mobile 類別
        body.classList.toggle('force-mobile');
        
        // 更新按鈕文字
        if (body.classList.contains('force-mobile')) {
            toggleBtn.textContent = '切換至電腦版介面';
        } else {
            toggleBtn.textContent = '切換至手機版介面';
        }
        
        // 切換後自動滾動到頂部以便觀察
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

  // =========================
  // 打字機動畫
  // =========================

  const text = "蔣羽茿";

  let index = 0;

  function type(){

    if(index < text.length){

      document.getElementById("typing").innerHTML += text.charAt(index);

      index++;

      setTimeout(type,200);

    }

  }

  type();


  // =========================
  // 技能進度條動畫
  // =========================

  const progressBars = document.querySelectorAll(".progress-fill");

  progressBars.forEach(bar => {

    const width = bar.getAttribute("data-width");

    setTimeout(() => {

      bar.style.width = width;

    },500);

  });

  // =========================
  // 星空背景
  // =========================

  const canvas = document.getElementById("stars");

  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const stars = [];

  for(let i=0;i<200;i++){

    stars.push({

      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height,
      radius:Math.random()*2,
      speed:Math.random()*0.5

    });

  }

  function drawStars(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="white";

    stars.forEach(star=>{

      ctx.beginPath();

      ctx.arc(star.x,star.y,star.radius,0,Math.PI*2);

      ctx.fill();

      star.y += star.speed;

      if(star.y > canvas.height){

        star.y = 0;

      }

    });

    requestAnimationFrame(drawStars);

  }

  drawStars();


  const glow = document.createElement("div");

  glow.classList.add("cursor-glow");

  document.body.appendChild(glow);

  document.addEventListener("mousemove",e=>{

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

  });

  const images = [

    "project1.jpg",
    "project2.jpg",
    "project3.jpg"

  ];

  let current = 0;

  setInterval(()=>{

    current++;

    if(current >= images.length){

      current = 0;

    }

    document.getElementById("slider-image").src = images[current];

  },3000);

  const hour = new Date().getHours();

  if(hour >= 18 || hour <= 6){

    document.body.style.background = "#020617";

  }
document.addEventListener('DOMContentLoaded', () => { // 確保網頁載入完成
    const dots = document.querySelectorAll('.dot');
    const tooltip = document.getElementById('radar-tooltip');

    dots.forEach(dot => {
        dot.addEventListener('mousemove', (e) => {
            const label = dot.getAttribute('data-label');
            const score = dot.getAttribute('data-score');
            
            tooltip.innerHTML = `<strong>${label}</strong>: ${score}%`;
            tooltip.style.opacity = '1';
            
            // 使用 pageX/Y 替代 clientX/Y，解決捲動後的位移問題
            tooltip.style.left = (e.pageX + 15) + 'px';
            tooltip.style.top = (e.pageY + 15) + 'px';
        });

        dot.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止原生的瞬間跳轉

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // 1. 平滑捲動到目標
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // 2. 統一發光提示邏輯
            // 如果 ID 直接設在卡片上，就直接發光；如果是在 section 上，就找裡面的主要內容
            let flashTarget = targetElement;
            
            // 判斷邏輯：如果目標是大的 Section，我們讓它裡面的第一個卡片發光
            if (targetElement.tagName === 'SECTION') {
                flashTarget = targetElement.querySelector('.timeline-content, .project-card, .section-title') || targetElement;
            }

            // 移除舊動畫並重新加入 (確保重複點擊也有效果)
            flashTarget.classList.remove('highlight-flash');
            void flashTarget.offsetWidth; // 強制重繪
            flashTarget.classList.add('highlight-flash');
            
            // 2.5秒後自動移除類別
            setTimeout(() => {
                flashTarget.classList.remove('highlight-flash');
            }, 2500);
        }
    });
});

function toggleZoom(img) {
    img.classList.toggle('img-expanded');
    if(img.classList.contains('img-expanded')) {
        img.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const track = document.getElementById("carouselTrack");

    // 先複製一次所有圖片
    track.innerHTML += track.innerHTML;

    let position = 0;
    let paused = false;
    const speed = 0.6;

    // 原始寬度（只算前半段）
    const originalWidth = track.scrollWidth / 2;

    function animate() {

        if (!paused) {

            position += speed;

            // 到一半就瞬間回到開頭
            if (position >= originalWidth) {
                position = 0;
            }

            track.style.transform =
                `translateX(-${position}px)`;
        }

        requestAnimationFrame(animate);
    }

    animate();

    // hover 暫停
    track.addEventListener("mouseenter", () => {
        paused = true;
    });

    track.addEventListener("mouseleave", () => {
        paused = false;
    });

});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        
        // 強制鎖定背景，並防止觸控穿透
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${window.scrollY}px`; // 記錄目前捲動位置
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('modal-closing');

        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('modal-closing');
            
            // 恢復背景狀態與捲動位置
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }, 400); 
    }
}
// 選配：按 Esc 鍵也可以關閉彈窗
window.onkeydown = function(event) {
    if (event.key === "Escape") {
        const modals = document.querySelectorAll('.modal-overlay');
        modals.forEach(modal => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
};
