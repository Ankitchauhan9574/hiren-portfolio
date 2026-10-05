/*
  Hiren Kanzariya — Senior Financial Consultant & Banking Specialist
  Interactive & Dynamic Application Logic with Advanced EMI Analytics & Micro-Interactions
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
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
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
  }, { threshold: 0.4 }).observe(el);
});

// ── Top Nav Scroll Effect ──
const topNav = document.getElementById('topNav');
if (topNav) {
  window.addEventListener('scroll', () => {
    topNav.classList.toggle('scrolled', window.scrollY > 40);
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

// ── EMI Calculator with Live Savings Calculator ──
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
const calcSavingsHighlight = document.getElementById('calcSavingsHighlight');

const barPrincipal = document.getElementById('barPrincipal');
const barInterest = document.getElementById('barInterest');
const calcApplyBtn = document.getElementById('calcApplyBtn');

function calculateEMI() {
  if (!loanAmountSlider || !loanInterestSlider || !loanTenureSlider) return;

  const P = parseFloat(loanAmountSlider.value);
  const rateVal = parseFloat(loanInterestSlider.value);
  const R = rateVal / 12 / 100;
  const N = parseFloat(loanTenureSlider.value) * 12;

  // Monthly EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
  const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  const totalPayment = emi * N;
  const totalInterest = totalPayment - P;

  // Compare with a standard retail rate (e.g., standard market rate + 1.25%)
  const benchmarkRate = (rateVal + 1.25) / 12 / 100;
  const benchmarkEmi = (P * benchmarkRate * Math.pow(1 + benchmarkRate, N)) / (Math.pow(1 + benchmarkRate, N) - 1);
  const benchmarkTotalInterest = (benchmarkEmi * N) - P;
  const totalSavings = Math.max(0, benchmarkTotalInterest - totalInterest);

  // Update text displays
  loanAmountDisplay.textContent = formatIndianCurrency(P);
  loanInterestDisplay.textContent = rateVal.toFixed(1) + ' %';
  loanTenureDisplay.textContent = loanTenureSlider.value + (parseInt(loanTenureSlider.value) === 1 ? ' Year' : ' Years');

  monthlyEmiDisplay.textContent = formatExactINR(emi);
  principalAmountDisplay.textContent = formatExactINR(P);
  totalInterestDisplay.textContent = formatExactINR(totalInterest);
  totalAmountDisplay.textContent = formatExactINR(totalPayment);

  if (calcSavingsHighlight) {
    calcSavingsHighlight.innerHTML = `✨ <strong>Estimated Interest Savings:</strong> Save up to ${formatExactINR(totalSavings)} vs market standard rates!`;
  }

  // Update visual breakdown bar
  const principalPercent = (P / totalPayment) * 100;
  const interestPercent = (totalInterest / totalPayment) * 100;

  if (barPrincipal) barPrincipal.style.width = principalPercent + '%';
  if (barInterest) barInterest.style.width = interestPercent + '%';

  // Update apply button WhatsApp link
  if (calcApplyBtn) {
    const textMsg = encodeURIComponent(
      `Hello Hiren Sir, I calculated my Loan requirement on your website:\n\n• Loan Amount: ${formatIndianCurrency(P)} (${formatExactINR(P)})\n• Interest Rate: ${rateVal}%\n• Tenure: ${loanTenureSlider.value} Years\n• Calculated Monthly EMI: ${formatExactINR(emi)}/month\n\nPlease check my eligibility and suggest the lowest ROI bank.`
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
