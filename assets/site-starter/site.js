(() => {
  const form = document.querySelector('#inquiry-form');
  const topic = document.querySelector('#topic');
  const need = document.querySelector('#need');
  const timing = document.querySelector('#timing');
  const summary = document.querySelector('#summary');
  const generateButton = document.querySelector('#generate-button');
  const copyButton = document.querySelector('#copy-button');
  const status = document.querySelector('#copy-status');

  // If an expected element is missing, the hand-written HTML template stays usable.
  if (!form || !topic || !need || !timing || !summary || !generateButton || !copyButton || !status) {
    return;
  }

  // Only accept a topic already listed in the select menu.
  const requestedTopic = new URLSearchParams(window.location.search).get('topic');
  const knownTopic = Array.from(topic.options).find(option => option.value === requestedTopic);
  if (knownTopic) {
    topic.value = knownTopic.value;
  }

  let lastGeneratedSummary = summary.value;
  copyButton.disabled = true;

  const fieldValue = (field, emptyText) => field.value.trim() || emptyText;

  const buildSummary = () => [
    `项目方向：${fieldValue(topic, '还没想好')}`,
    `目前想解决：${fieldValue(need, '还没有补充')}`,
    `时间安排：${fieldValue(timing, '暂时不确定')}`
  ].join('\n');

  summary.addEventListener('input', () => {
    status.textContent = '摘要已手动修改。重新生成前会询问是否替换。';
    status.dataset.state = 'edited';
    copyButton.disabled = summary.value.trim() === '';
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    if (!topic.value && !need.value.trim() && !timing.value) {
      status.textContent = '先选一个方向，或写一句你想解决的问题。';
      status.dataset.state = 'error';
      need.focus();
      return;
    }

    const summaryWasEdited = summary.value !== lastGeneratedSummary;
    if (summaryWasEdited) {
      const shouldReplace = window.confirm(
        '你已经手动修改摘要。确定用表单内容替换吗？\n\n选择“确定”替换；选择“取消”保留手动摘要。'
      );

      if (!shouldReplace) {
        status.textContent = '已保留你手动修改的摘要。';
        status.dataset.state = 'edited';
        return;
      }
    }

    const nextSummary = buildSummary();
    summary.value = nextSummary;
    lastGeneratedSummary = nextSummary;
    copyButton.disabled = false;
    status.textContent = '已生成摘要，可继续编辑或复制。内容仍只在本页。';
    status.dataset.state = 'generated';
    summary.focus();
  });

  copyButton.addEventListener('click', async () => {
    if (!summary.value.trim()) {
      status.textContent = '摘要为空，请先填写或生成内容。';
      status.dataset.state = 'error';
      summary.focus();
      return;
    }

    try {
      if (!navigator.clipboard || !window.isSecureContext) {
        throw new Error('Clipboard API unavailable');
      }

      await navigator.clipboard.writeText(summary.value);
      status.textContent = '摘要已复制到剪贴板。';
      status.dataset.state = 'success';
    } catch {
      status.textContent = '自动复制不可用。请点进摘要框，全选并手动复制。';
      status.dataset.state = 'error';
      summary.focus();
      summary.select();
    }
  });
  form.hidden = false;
  copyButton.hidden = false;
  status.textContent = '填写表单后生成摘要，也可以直接在摘要框里写。';
})();
