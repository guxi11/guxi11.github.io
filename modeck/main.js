const modeResources = {
  prog: { rules: '代码规范', skills: '代码审查' },
  doc: { rules: '文档表达规范', skills: '技术写作' },
  research: { rules: '资料与引用原则', skills: '研究方法' },
};

const cards = [...document.querySelectorAll('[data-mode]')];
const selection = document.querySelector('#mode-selection');
const rules = document.querySelector('#preview-rules');
const skills = document.querySelector('#preview-skills');

function renderComposition() {
  const selected = cards.filter((card) => card.getAttribute('aria-pressed') === 'true');
  selection.textContent = selected.map((card) => card.dataset.mode).join(', ') || '（未选择额外模式）';
  rules.textContent = ['通用协作原则', ...selected.map((card) => modeResources[card.dataset.mode].rules)].join('、');
  skills.textContent = selected.map((card) => modeResources[card.dataset.mode].skills).join('、') || '未选择额外技能';
}

cards.forEach((card) => {
  card.addEventListener('click', () => {
    const selected = card.getAttribute('aria-pressed') !== 'true';
    card.setAttribute('aria-pressed', String(selected));
    card.classList.toggle('is-selected', selected);
    card.querySelector('.card-check').textContent = selected ? '✓' : '+';
    renderComposition();
  });
});

const copyButton = document.querySelector('#copy-install');
const copyStatus = document.querySelector('#copy-status');

copyButton.addEventListener('click', async () => {
  const command = document.querySelector('#install-command').textContent;
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(command);
    copyStatus.textContent = '已复制安装命令。';
  } catch {
    // Keep the exact command visible and selectable when clipboard access is denied.
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('#install-command'));
    const textSelection = window.getSelection();
    textSelection?.removeAllRanges();
    textSelection?.addRange(range);
    copyStatus.textContent = '未能自动复制，已选中命令，请手动复制。';
  }
});
