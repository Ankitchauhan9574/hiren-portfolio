/*
  Hiren Kanzariya — Senior Financial Consultant & Banking Specialist
  Interactive & Dynamic Application Logic
*/

// ── Smooth Scroll ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (!href || href === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ── Reveal on Scroll ──
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
reveals.forEach(el => io.observe(el));

// ── Animated Counters ──
document.querySelectorAll('.counter').forEach(el => {
  new IntersectionObserver(([e], observer) => {
    if (!e.isIntersecting) return;
    const t = parseFloat(el.dataset.target);
    const d = parseInt(el.dataset.decimals) || 0;
    const dur = 2000;
    const s = performance.now();
    const ease = x => x < 0.5 ? 4*x*x*x : 1 - Math.pow(-2*x+2, 3)/2;
    
    function update(n) {
      const p = Math.min((n - s) / dur, 1);
      el.textContent = (t * ease(p)).toFixed(d);
      if (p < 1) requestAnimationFrame(update);
      else el.textContent = t.toFixed(d);
    }
    requestAnimationFrame(update);
    observer.unobserve(el);
  }, { threshold: 0.4 }).observe(el);
});

// ── Top Nav Scroll Effect ──
const topNav = document.getElementById('topNav');
if (topNav) {
  window.addEventListener('scroll', () => {
    topNav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

// ── Hero Grid Spotlight ──
const heroGrid = document.querySelector('.hero-grid');
const heroEl = document.getElementById('hero');
if (heroGrid && heroEl) {
  let gx = 0, gy = 0, tx = 0, ty = 0;
  document.addEventListener('mousemove', e => {
    const heroRect = heroEl.getBoundingClientRect();
    const gridRect = heroGrid.getBoundingClientRect();
    if (e.clientY >= heroRect.top && e.clientY <= heroRect.bottom) {
      tx = e.clientX - gridRect.left;
      ty = e.clientY - gridRect.top;
    } else {
      tx = gridRect.width / 2;
      ty = gridRect.height * 0.4;
    }
  });

  (function lerpGrid() {
    gx += (tx - gx) * 0.08;
    gy += (ty - gy) * 0.08;
    heroGrid.style.setProperty('--mx', gx + 'px');
    heroGrid.style.setProperty('--my', gy + 'px');
    requestAnimationFrame(lerpGrid);
  })();
}

// ── Active Nav & Side Track Indicators ──
const navAnchors = document.querySelectorAll('.nav-links a');
const sectionEls = document.querySelectorAll('section[id]');
const leftTrack = document.getElementById('leftTrack');
const rightTrack = document.getElementById('rightTrack');
const scrollPctEl = document.getElementById('scrollPct');
const leftDots = document.querySelectorAll('.side-panel.left .side-dot');
const rightDots = document.querySelectorAll('.side-panel.right .side-dot');

function updateNavAndPanels() {
  const y = window.scrollY + window.innerHeight * 0.35;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const pct = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
  const trackPct = Math.round(pct * 100);

  let id = '', activeIndex = 0;
  sectionEls.forEach((s, i) => {
    if (y >= s.offsetTop) {
      id = s.id;
      activeIndex = i;
    }
  });

  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + id);
  });

  if (leftTrack) leftTrack.style.height = trackPct + '%';
  if (rightTrack) rightTrack.style.height = trackPct + '%';
  if (scrollPctEl) scrollPctEl.textContent = String(trackPct).padStart(2, '0');

  if (leftDots.length) {
    const lIdx = Math.min(activeIndex, leftDots.length - 1);
    leftDots.forEach((d, i) => d.classList.toggle('active', i === lIdx));
  }
  if (rightDots.length) {
    const rIdx = Math.min(activeIndex, rightDots.length - 1);
    rightDots.forEach((d, i) => d.classList.toggle('active', i === rIdx));
  }
}

window.addEventListener('scroll', updateNavAndPanels, { passive: true });
updateNavAndPanels();

// ── Mobile Menu ──
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('mobileMenu');
if (toggle && menu) {
  const menuLinks = menu.querySelectorAll('.mobile-menu-link');
  let menuOpen = false;

  function openMenu() {
    menuOpen = true;
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    menu.classList.add('open');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    if (!menuOpen) return;
    menuOpen = false;
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  toggle.addEventListener('click', () => menuOpen ? closeMenu() : openMenu());
  menuLinks.forEach(l => l.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 1024) closeMenu(); });
}

// ── Loan Category Filters ──
const filterButtons = document.querySelectorAll('.loan-filter-btn');
const loanCards = document.querySelectorAll('.loan-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-filter');
    loanCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category').includes(category)) {
        card.style.display = 'flex';
        setTimeout(() => card.style.opacity = '1', 20);
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
      }
    });
  });
});

// ── Currency Formatter (Indian System) ──
function formatIndianCurrency(num) {
  if (num >= 10000000) {
    return '₹ ' + (num / 10000000).toFixed(2) + ' Cr';
  } else if (num >= 100000) {
    return '₹ ' + (num / 100000).toFixed(2) + ' Lakh';
  }
  return '₹ ' + Math.round(num).toLocaleString('en-IN');
}

function formatExactINR(num) {
  return '₹ ' + Math.round(num).toLocaleString('en-IN');
}

// ── EMI Calculator ──
const loanAmountSlider = document.getElementById('calcLoanAmount');
const loanInterestSlider = document.getElementById('calcInterestRate');
const loanTenureSlider = document.getElementById('calcTenure');

const loanAmountDisplay = document.getElementById('calcLoanAmountDisplay');
const loanInterestDisplay = document.getElementById('calcInterestDisplay');
const loanTenureDisplay = document.getElementById('calcTenureDisplay');

const monthlyEmiDisplay = document.getElementById('calcMonthlyEmi');
const totalInterestDisplay = document.getElementById('calcTotalInterest');
const totalAmountDisplay = document.getElementById('calcTotalAmount');
const principalAmountDisplay = document.getElementById('calcPrincipalDisplay');

const barPrincipal = document.getElementById('barPrincipal');
const barInterest = document.getElementById('barInterest');
const calcApplyBtn = document.getElementById('calcApplyBtn');

function calculateEMI() {
  if (!loanAmountSlider || !loanInterestSlider || !loanTenureSlider) return;

  const P = parseFloat(loanAmountSlider.value);
  const R = parseFloat(loanInterestSlider.value) / 12 / 100;
  const N = parseFloat(loanTenureSlider.value) * 12;

  // Monthly EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
  const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  const totalPayment = emi * N;
  const totalInterest = totalPayment - P;

  // Update text displays
  loanAmountDisplay.textContent = formatIndianCurrency(P);
  loanInterestDisplay.textContent = parseFloat(loanInterestSlider.value).toFixed(1) + ' %';
  loanTenureDisplay.textContent = loanTenureSlider.value + (parseInt(loanTenureSlider.value) === 1 ? ' Year' : ' Years');

  monthlyEmiDisplay.textContent = formatExactINR(emi);
  principalAmountDisplay.textContent = formatExactINR(P);
  totalInterestDisplay.textContent = formatExactINR(totalInterest);
  totalAmountDisplay.textContent = formatExactINR(totalPayment);

  // Update visual breakdown bar
  const principalPercent = (P / totalPayment) * 100;
  const interestPercent = (totalInterest / totalPayment) * 100;

  if (barPrincipal) barPrincipal.style.width = principalPercent + '%';
  if (barInterest) barInterest.style.width = interestPercent + '%';

  // Update apply button WhatsApp link
  if (calcApplyBtn) {
    const textMsg = encodeURIComponent(
      `Hello Hiren Sir, I calculated my Loan requirement on your website:\n\n• Loan Amount: ${formatIndianCurrency(P)} (${formatExactINR(P)})\n• Interest Rate: ${loanInterestSlider.value}%\n• Tenure: ${loanTenureSlider.value} Years\n• Calculated EMI: ${formatExactINR(emi)}/month\n\nPlease let me know the best bank options and approval process.`
    );
    calcApplyBtn.href = `https://wa.me/918140932289?text=${textMsg}`;
  }
}

if (loanAmountSlider && loanInterestSlider && loanTenureSlider) {
  loanAmountSlider.addEventListener('input', calculateEMI);
  loanInterestSlider.addEventListener('input', calculateEMI);
  loanTenureSlider.addEventListener('input', calculateEMI);
  calculateEMI();
}

// ── Document Checklist Switcher ──
const checklistTabs = document.querySelectorAll('.checklist-tab-btn');
const checklistViews = {
  salaried: [
    { title: "Identity & Address Proof", desc: "PAN Card, Aadhaar Card, Passport or Voter ID" },
    { title: "Income Proof", desc: "Latest 3-6 months Salary Slips with deductions breakdown" },
    { title: "Bank Statements", desc: "Latest 6 months updated Salary Account statement" },
    { title: "Employment Verification", desc: "Form 16 for last 2 years & Company Appointment / ID" }
  ],
  business: [
    { title: "Business Proof", desc: "GST Registration Certificate, Gumasta / Shop Act, MSME Udyam" },
    { title: "Financial Documents", desc: "Audited Balance Sheet & P&L Statement for last 2-3 years" },
    { title: "Income Tax Returns (ITR)", desc: "ITR Acknowledgements & Computation sheets for last 2-3 years" },
    { title: "Bank Current Account", desc: "Latest 12 months Current & Savings account bank statements" }
  ],
  doctor: [
    { title: "Degree & Registration", desc: "MBBS / MD / BDS Certificate & State Medical Council Registration" },
    { title: "Clinic / Practice Proof", desc: "Clinic Setup proof, Ownership / Rental deed, Hospital tie-up letter" },
    { title: "Income Proof & ITR", desc: "Last 2 years ITR with computation and CA audited statements" },
    { title: "Banking Statements", desc: "Latest 6-12 months operating bank accounts" }
  ],
  lap: [
    { title: "Property Title Deeds", desc: "Registered Sale Deed, Mother Deed, Index II copy" },
    { title: "Approved Map & Sanction", desc: "Municipal approved building plan, NA order, Completion certificate" },
    { title: "Tax Receipts & NOC", desc: "Latest Property Tax receipts, Society NOC, Electricity bill" },
    { title: "Encumbrance Certificate", desc: "Updated search report & non-encumbrance certificate" }
  ]
};

const checklistGrid = document.getElementById('checklistGrid');

function renderChecklist(type) {
  if (!checklistGrid || !checklistViews[type]) return;
  checklistGrid.innerHTML = '';
  checklistViews[type].forEach(item => {
    const div = document.createElement('div');
    div.className = 'checklist-item';
    div.innerHTML = `
      <div class="checklist-item-icon">📋</div>
      <div class="checklist-item-text">
        <h5>${item.title}</h5>
        <p>${item.desc}</p>
      </div>
    `;
    checklistGrid.appendChild(div);
  });
}

checklistTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    checklistTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderChecklist(tab.getAttribute('data-type'));
  });
});
renderChecklist('salaried');

// ── FAQ Accordion ──
const faqItems = document.querySelectorAll('.faq-item');
const faqToggleAll = document.getElementById('faqToggleAll');
let allExpanded = false;

document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('open');
    updateFaqToggleLabel();
  });
});

if (faqToggleAll) {
  faqToggleAll.addEventListener('click', () => {
    allExpanded = !allExpanded;
    if (allExpanded) {
      faqItems.forEach((item, i) => {
        setTimeout(() => item.classList.add('open'), i * 150);
      });
    } else {
      const total = faqItems.length;
      faqItems.forEach((item, i) => {
        setTimeout(() => item.classList.remove('open'), (total - 1 - i) * 60);
      });
    }
    setTimeout(updateFaqToggleLabel, faqItems.length * 150 + 100);
  });
}

function updateFaqToggleLabel() {
  if (!faqToggleAll) return;
  const openCount = document.querySelectorAll('.faq-item.open').length;
  allExpanded = openCount === faqItems.length;
  faqToggleAll.textContent = allExpanded ? 'Collapse All' : 'Expand All';
}

// ── Lead Inquiry Form Submit ──
const loanForm = document.getElementById('leadLoanForm');
if (loanForm) {
  loanForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const name = document.getElementById('leadName').value.trim();
    const phone = document.getElementById('leadPhone').value.trim();
    const city = document.getElementById('leadCity').value.trim();
    const loanType = document.getElementById('leadLoanType').value;
    const loanAmount = document.getElementById('leadAmount').value.trim();
    const empType = document.getElementById('leadEmpType').value;
    const notes = document.getElementById('leadNotes').value.trim();

    const formattedMessage = encodeURIComponent(
      `🌟 *NEW LOAN INQUIRY FOR HIREN KANZARIYA*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📱 *Phone:* ${phone}\n` +
      `📍 *City:* ${city}\n` +
      `💼 *Loan Type:* ${loanType}\n` +
      `💰 *Required Amount:* ₹ ${loanAmount}\n` +
      `🏢 *Employment:* ${empType}\n` +
      (notes ? `📝 *Notes:* ${notes}\n\n` : `\n`) +
      `Please provide guidance on eligibility and the best bank offer.`
    );

    // Open WhatsApp directly
    window.open(`https://wa.me/918140932289?text=${formattedMessage}`, '_blank');

    alert(`Thank you, ${name}! Your loan inquiry for ₹ ${loanAmount} has been prepared. We are connecting you directly with Senior Financial Consultant Hiren Kanzariya on WhatsApp.`);
    loanForm.reset();
  });
}
