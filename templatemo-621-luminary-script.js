/*
  Hiren Kanzariya — Senior Financial Consultant & Banking Specialist
  Two-Way Dynamic EMI & Eligibility Calculator (Vice-Versa) with Direct Numeric Typing
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

// ── Reveal on Scroll with Stagger ──
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px 50px 0px' });
reveals.forEach(el => io.observe(el));

// ── Animated Counters with Easing ──
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
  }, { threshold: 0.3 }).observe(el);
});

// ── Top Nav Scroll Effect ──
const topNav = document.getElementById('topNav');
if (topNav) {
  window.addEventListener('scroll', () => {
    topNav.classList.toggle('scrolled', window.scrollY > 30);
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
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 30);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(15px)';
        setTimeout(() => card.style.display = 'none', 250);
      }
    });
  });
});

// ── Currency Formatter ──
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

// ══════════════════════════════════════════════════
// ── TWO-WAY DYNAMIC & REVERSE EMI CALCULATOR ──
// ══════════════════════════════════════════════════
let currentCalcMode = 'emi'; // 'emi' = find EMI from Loan, 'loan' = find Loan from EMI

const btnModeEmi = document.getElementById('btnModeEmi');
const btnModeLoan = document.getElementById('btnModeLoan');

const lblPrimaryInput = document.getElementById('lblPrimaryInput');
const inputLoanAmount = document.getElementById('inputLoanAmount');
const calcLoanAmount = document.getElementById('calcLoanAmount');
const limitMin = document.getElementById('limitMin');
const limitMax = document.getElementById('limitMax');

const inputInterestRate = document.getElementById('inputInterestRate');
const calcInterestRate = document.getElementById('calcInterestRate');

const inputTenure = document.getElementById('inputTenure');
const calcTenure = document.getElementById('calcTenure');

const lblResultBadge = document.getElementById('lblResultBadge');
const calcMonthlyEmi = document.getElementById('calcMonthlyEmi');
const lblRowPrincipal = document.getElementById('lblRowPrincipal');
const calcPrincipalDisplay = document.getElementById('calcPrincipalDisplay');
const calcTotalInterest = document.getElementById('calcTotalInterest');
const calcTotalAmount = document.getElementById('calcTotalAmount');
const calcSavingsHighlight = document.getElementById('calcSavingsHighlight');

const barPrincipal = document.getElementById('barPrincipal');
const barInterest = document.getElementById('barInterest');
const calcApplyBtn = document.getElementById('calcApplyBtn');

function switchCalcMode(mode) {
  currentCalcMode = mode;
  if (mode === 'emi') {
    btnModeEmi.classList.add('active');
    btnModeLoan.classList.remove('active');
    
    lblPrimaryInput.textContent = 'Loan Amount Required';
    lblResultBadge.textContent = 'Estimated Monthly Installment';
    lblRowPrincipal.textContent = 'Principal Loan Amount';

    calcLoanAmount.min = "100000";
    calcLoanAmount.max = "50000000";
    calcLoanAmount.step = "50000";
    inputLoanAmount.min = "50000";
    inputLoanAmount.max = "100000000";
    inputLoanAmount.step = "25000";
    limitMin.textContent = '₹ 1 Lakh';
    limitMax.textContent = '₹ 5 Crore';

    inputLoanAmount.value = 5000000;
    calcLoanAmount.value = 5000000;
  } else {
    btnModeLoan.classList.add('active');
    btnModeEmi.classList.remove('active');

    lblPrimaryInput.textContent = 'Target Monthly EMI (Your Budget)';
    lblResultBadge.textContent = 'Max Loan Sanction Eligibility';
    lblRowPrincipal.textContent = 'Sanctioned Loan Principal';

    calcLoanAmount.min = "5000";
    calcLoanAmount.max = "500000";
    calcLoanAmount.step = "1000";
    inputLoanAmount.min = "1000";
    inputLoanAmount.max = "2000000";
    inputLoanAmount.step = "500";
    limitMin.textContent = '₹ 5,000 /mo';
    limitMax.textContent = '₹ 5.00 Lakh /mo';

    inputLoanAmount.value = 45000;
    calcLoanAmount.value = 45000;
  }
  calculateTwoWay();
}

if (btnModeEmi && btnModeLoan) {
  btnModeEmi.addEventListener('click', () => switchCalcMode('emi'));
  btnModeLoan.addEventListener('click', () => switchCalcMode('loan'));
}

function calculateTwoWay() {
  if (!inputLoanAmount || !calcInterestRate || !calcTenure) return;

  const rateVal = parseFloat(calcInterestRate.value) || 8.5;
  const R = rateVal / 12 / 100;
  const tenureYrs = parseFloat(calcTenure.value) || 20;
  const N = tenureYrs * 12;

  let P = 0;
  let emi = 0;

  if (currentCalcMode === 'emi') {
    // Mode 1: Calculate EMI from Loan Amount P
    P = parseFloat(inputLoanAmount.value) || 100000;
    emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    
    calcMonthlyEmi.textContent = formatExactINR(emi);
    calcPrincipalDisplay.textContent = formatExactINR(P);
  } else {
    // Mode 2 (Vice-Versa): Calculate Max Loan Amount P from Target EMI
    emi = parseFloat(inputLoanAmount.value) || 5000;
    P = (emi * (Math.pow(1 + R, N) - 1)) / (R * Math.pow(1 + R, N));
    
    calcMonthlyEmi.textContent = formatExactINR(P); // In reverse mode, main result is Loan Amount!
    calcPrincipalDisplay.textContent = formatExactINR(P);
  }

  const totalPayment = emi * N;
  const totalInterest = Math.max(0, totalPayment - P);

  calcTotalInterest.textContent = formatExactINR(totalInterest);
  calcTotalAmount.textContent = formatExactINR(totalPayment);

  // Interest savings vs standard rate (+1.25%)
  const benchmarkRate = (rateVal + 1.25) / 12 / 100;
  const benchmarkEmi = (P * benchmarkRate * Math.pow(1 + benchmarkRate, N)) / (Math.pow(1 + benchmarkRate, N) - 1);
  const benchmarkTotalInterest = (benchmarkEmi * N) - P;
  const totalSavings = Math.max(0, benchmarkTotalInterest - totalInterest);

  if (calcSavingsHighlight) {
    calcSavingsHighlight.innerHTML = `✨ <strong>Estimated Interest Savings:</strong> Save up to ${formatExactINR(totalSavings)} vs standard retail bank rates!`;
  }

  // Visual breakdown bar
  const principalPercent = Math.min(100, Math.max(0, (P / totalPayment) * 100));
  const interestPercent = Math.min(100, Math.max(0, (totalInterest / totalPayment) * 100));

  if (barPrincipal) barPrincipal.style.width = principalPercent + '%';
  if (barInterest) barInterest.style.width = interestPercent + '%';

  // Apply button WhatsApp text
  if (calcApplyBtn) {
    const textMsg = encodeURIComponent(
      `Hello Hiren Sir, I calculated my Loan requirement on your website:\n\n• ${currentCalcMode === 'emi' ? 'Loan Amount' : 'Target Monthly EMI'}: ${formatExactINR(parseFloat(inputLoanAmount.value))}\n• Interest Rate: ${rateVal}%\n• Tenure: ${tenureYrs} Years\n• ${currentCalcMode === 'emi' ? 'Calculated EMI' : 'Calculated Loan Eligibility'}: ${formatExactINR(currentCalcMode === 'emi' ? emi : P)}\n\nPlease review my profile and share the best bank sanction offer.`
    );
    calcApplyBtn.href = `https://wa.me/918140932289?text=${textMsg}`;
  }
}

// ── Two-Way Event Listeners (Slider <-> Input synchronization) ──
if (calcLoanAmount && inputLoanAmount) {
  calcLoanAmount.addEventListener('input', () => {
    inputLoanAmount.value = calcLoanAmount.value;
    calculateTwoWay();
  });
  inputLoanAmount.addEventListener('input', () => {
    calcLoanAmount.value = inputLoanAmount.value;
    calculateTwoWay();
  });
}

if (calcInterestRate && inputInterestRate) {
  calcInterestRate.addEventListener('input', () => {
    inputInterestRate.value = calcInterestRate.value;
    calculateTwoWay();
  });
  inputInterestRate.addEventListener('input', () => {
    calcInterestRate.value = inputInterestRate.value;
    calculateTwoWay();
  });
}

if (calcTenure && inputTenure) {
  calcTenure.addEventListener('input', () => {
    inputTenure.value = calcTenure.value;
    calculateTwoWay();
  });
  inputTenure.addEventListener('input', () => {
    calcTenure.value = inputTenure.value;
    calculateTwoWay();
  });
}

// Initialize on page load
calculateTwoWay();

// ── Document Checklist Switcher ──
const checklistTabs = document.querySelectorAll('.checklist-tab-btn');
const checklistViews = {
  salaried: [
    { title: "Identity & KYC Documents", desc: "PAN Card, Aadhaar Card, Passport or Voter ID with permanent address" },
    { title: "Salary Slips & Increment Letters", desc: "Latest 3 to 6 months salary slips reflecting all allowances & deductions" },
    { title: "Salary Bank Account Statement", desc: "Latest 6 months updated bank statement where salary is credited" },
    { title: "Form 16 & Employment Proof", desc: "Form 16 Part A & B for last 2 years + Official Company Identity Card" }
  ],
  business: [
    { title: "Business Proof & Registrations", desc: "GST Registration Certificate, Gumasta / Shop Act, MSME Udyam Registration" },
    { title: "Audited Financials (CA Certified)", desc: "Balance Sheet & Profit & Loss statements with audit report for last 2-3 years" },
    { title: "Income Tax Returns (ITR)", desc: "ITR Acknowledgements & Computation sheets for last 2 to 3 Assessment Years" },
    { title: "Current & Operating Bank Accounts", desc: "Latest 12 months bank statements of all active current & CC/OD accounts" }
  ],
  doctor: [
    { title: "Degree & Medical Registration", desc: "MBBS / MD / MS / BDS / MDS Certificate & State Medical Council Registration" },
    { title: "Clinic / Hospital Setup Proof", desc: "Clinic Registration, Property deed / Registered Rent Agreement, Hospital affiliation" },
    { title: "Financials & Income Tax Returns", desc: "Last 2 years ITR with CA computation sheets and balance sheets" },
    { title: "Professional Practice Banking", desc: "Latest 6 to 12 months operating bank account statements" }
  ],
  lap: [
    { title: "Complete Title Deeds", desc: "Registered Sale Deed, Mother Deed, Index II copy & chain of title documents" },
    { title: "Approved Municipal Map & Sanctions", desc: "Approved Building Layout, NA (Non-Agricultural) order, Completion / OC certificate" },
    { title: "Tax Receipts & Society NOC", desc: "Latest Property Tax receipts, Society NOC / Share Certificate copy, Electricity bill" },
    { title: "Encumbrance Search Report", desc: "13 to 30 years non-encumbrance certificate & search report from advocate" }
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
        setTimeout(() => item.classList.add('open'), i * 140);
      });
    } else {
      const total = faqItems.length;
      faqItems.forEach((item, i) => {
        setTimeout(() => item.classList.remove('open'), (total - 1 - i) * 60);
      });
    }
    setTimeout(updateFaqToggleLabel, faqItems.length * 140 + 100);
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
      `Please review my profile and share the best bank offer.`
    );

    // Open WhatsApp directly
    window.open(`https://wa.me/918140932289?text=${formattedMessage}`, '_blank');

    alert(`Thank you, ${name}! Your loan inquiry for ₹ ${loanAmount} has been received. You are now being connected directly with Senior Financial Consultant Hiren Kanzariya on WhatsApp.`);
    loanForm.reset();
  });
}

// ── 3D Tilt Effect on Loan Cards ──
if (window.innerWidth > 1024) {
  document.querySelectorAll('.loan-card, .comparison-card.hiren-assisted').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}
