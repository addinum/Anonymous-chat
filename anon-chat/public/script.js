(() => {
  const screens = {
    landing: document.getElementById('landing'),
    searching: document.getElementById('searching'),
    chat: document.getElementById('chat'),
    inbox: document.getElementById('inbox'),
    settings: document.getElementById('settings'),
    thread: document.getElementById('thread'),
  };

  const nameInput = document.getElementById('wlHandleInput');
  const startBtn = document.getElementById('startBtn');
  const codeInput = document.getElementById('wlJoinCodeInput');
  const codeBtn = document.getElementById('codeBtn');
  const cancelSearchBtn = document.getElementById('cancelSearchBtn');
  const skipBtn = document.getElementById('skipBtn');
  const leaveBtn = document.getElementById('leaveBtn');
  const friendBtn = document.getElementById('friendBtn');
  const chatLog = document.getElementById('chatLog');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const chatWithLabel = document.getElementById('chatWithLabel');
  const typingIndicator = document.getElementById('typingIndicator');
  const leftToast = document.getElementById('leftToast');
  const toastFindBtn = document.getElementById('toastFindBtn');
  const dialFreq = document.getElementById('dialFreq');
  const onlineCount = document.getElementById('onlineCount');
  const scanLabel = document.getElementById('scanLabel');
  const scanSub = document.getElementById('scanSub');
  const contactsSection = document.getElementById('contactsSection');
  const accountBar = document.getElementById('accountBar');
  const accountBarText = document.getElementById('accountBarText');
  const settingsAccountBtn = document.getElementById('settingsAccountBtn');
  const settingsAccountAction = document.getElementById('settingsAccountAction');
  const settingsSignOutBtn = document.getElementById('settingsSignOutBtn');
  const settingsAccountText = document.getElementById('settingsAccountText');
  const settingsProfileName = document.getElementById('settingsProfileName');
  const settingsProfileAccount = document.getElementById('settingsProfileAccount');
  const settingsAvatarPreview = document.getElementById('settingsAvatarPreview');
  const saveProfileBtn = document.getElementById('saveProfileBtn');
  const profileSaveStatus = document.getElementById('profileSaveStatus');
  const settingsDarkModeToggle = document.getElementById('settingsDarkModeToggle');
  const bottomNav = document.getElementById('bottomNav');
  const bottomInboxBadge = document.getElementById('bottomInboxBadge');
  const accountModal = document.getElementById('accountModal');
  const accountModalClose = document.getElementById('accountModalClose');
  const authTabsView = document.getElementById('authTabsView');
  const accountEditView = document.getElementById('accountEditView');
  const tabSignup = document.getElementById('tabSignup');
  const tabLogin = document.getElementById('tabLogin');
  const signupForm = document.getElementById('signupForm');
  const loginForm = document.getElementById('loginForm');
  const signupEmail = document.getElementById('signupEmail');
  const signupPassword = document.getElementById('signupPassword');
  const signupError = document.getElementById('signupError');
  const loginEmail = document.getElementById('loginEmail');
  const loginPassword = document.getElementById('loginPassword');
  const loginError = document.getElementById('loginError');
  const accountEmailLabel = document.getElementById('accountEmailLabel');
  const editAccountForm = document.getElementById('editAccountForm');
  const editEmail = document.getElementById('editEmail');
  const editPassword = document.getElementById('editPassword');
  const editCurrentPassword = document.getElementById('editCurrentPassword');
  const editError = document.getElementById('editError');
  const editSuccess = document.getElementById('editSuccess');
  const signOutBtn = document.getElementById('signOutBtn');
  const contactsList = document.getElementById('contactsList');
  const emojiBtn = document.getElementById('emojiBtn');
  const emojiPanel = document.getElementById('emojiPanel');
  const friendRequestToast = document.getElementById('friendRequestToast');
  const friendRequestText = document.getElementById('friendRequestText');
  const friendAcceptBtn = document.getElementById('friendAcceptBtn');
  const friendDeclineBtn = document.getElementById('friendDeclineBtn');
  const friendCodeToast = document.getElementById('friendCodeToast');
  const friendCodeText = document.getElementById('friendCodeText');

  const inboxBtn = document.getElementById('inboxBtn');
  const inboxBadge = document.getElementById('inboxBadge');
  const inboxBackBtn = document.getElementById('inboxBackBtn');
  const inboxList = document.getElementById('inboxList');
  const avatarGrid = document.getElementById('avatarGrid');
  const chatAvatar = document.getElementById('chatAvatar');
  const inboxEmpty = document.getElementById('inboxEmpty');
  const threadBackBtn = document.getElementById('threadBackBtn');
  const threadWithLabel = document.getElementById('threadWithLabel');
  const threadPresenceLabel = document.getElementById('threadPresenceLabel');
  const replyComposer = document.getElementById('replyComposer');
  const replyComposerPreview = document.getElementById('replyComposerPreview');
  const replyComposerClose = document.getElementById('replyComposerClose');
  const threadAvatar = document.getElementById('threadAvatar');
  const threadLog = document.getElementById('threadLog');
  const threadForm = document.getElementById('threadForm');
  const threadInput = document.getElementById('threadInput');
  const micBtn = document.getElementById('micBtn');
  const gifBtn = document.getElementById('gifBtn');
  const gifPickerModal = document.getElementById('gifPickerModal');
  const gifPickerClose = document.getElementById('gifPickerClose');
  const gifSearchForm = document.getElementById('gifSearchForm');
  const gifSearchInput = document.getElementById('gifSearchInput');
  const gifPickerStatus = document.getElementById('gifPickerStatus');
  const gifResults = document.getElementById('gifResults');
  const recordBar = document.getElementById('recordBar');
  const recordTime = document.getElementById('recordTime');
  const recordCancelBtn = document.getElementById('recordCancelBtn');
  const recordSendBtn = document.getElementById('recordSendBtn');
  const callBtn = document.getElementById('callBtn');
  const fileBtn = document.getElementById('fileBtn');
  const fileInput = document.getElementById('fileInput');
  const fileViewerModal = document.getElementById('fileViewerModal');
  const fileViewerClose = document.getElementById('fileViewerClose');
  const fileViewerTitle = document.getElementById('fileViewerTitle');
  const fileViewerMeta = document.getElementById('fileViewerMeta');
  const fileViewerBody = document.getElementById('fileViewerBody');
  const incomingCallModal = document.getElementById('incomingCallModal');
  const incomingCallAvatar = document.getElementById('incomingCallAvatar');
  const incomingCallName = document.getElementById('incomingCallName');
  const callAcceptBtn = document.getElementById('callAcceptBtn');
  const callDeclineBtn = document.getElementById('callDeclineBtn');
  const activeCallBar = document.getElementById('activeCallBar');
  const activeCallAvatar = document.getElementById('activeCallAvatar');
  const activeCallName = document.getElementById('activeCallName');
  const activeCallStatus = document.getElementById('activeCallStatus');
  const callHangupBtn = document.getElementById('callHangupBtn');
  const callBarMain = document.getElementById('callBarMain');
  const callBarControls = document.getElementById('callBarControls');
  const callDuration = document.getElementById('callDuration');
  const callQuality = document.getElementById('callQuality');
  const callSpeakerBtn = document.getElementById('callSpeakerBtn');
  const callMuteBtn = document.getElementById('callMuteBtn');
  const remoteAudio = document.getElementById('remoteAudio');

  let ws = null;
  let typingTimeout = null;
  let remoteTypingTimeout = null;
  let currentStrangerName = 'Stranger';
  let pendingConnectByCode = false;
  let chatHistoryPushed = false;
  let reconnectAttempts = 0;
  let userInitiatedClose = false;
  let currentThreadContactId = null;
  let pendingNotificationChatId = null;
  let threadOldestId = null;
  let threadHasMore = false;
  let loadingOlderThread = false;
  let threadRenderTarget = threadLog;
  let latestContacts = [];
  let selectedReply = null;
  let presenceById = new Map();

  // ---------- Inbox WebRTC voice calls ----------
  let peerConnection = null;
  let localCallStream = null;
  let activeCallContactId = null;
  let activeCallContactName = 'Contact';
  let activeCallContactAvatar = 'boy1';
  let pendingIncomingCall = null;
  let callStartedAt = null;
  let callTimerInterval = null;
  let isCallMuted = false;
  let isSpeakerOn = true;
  let pendingIceCandidates = [];
  let callDisconnectTimer = null;
  let callReconnectInProgress = false;
  let callStatsTimer = null;
  let callHistory = [];
  let activeCallDirection = 'outgoing';
  loadCallHistory();
  const rtcConfig = {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' },
      { urls: 'stun:stun.cloudflare.com:3478' }
    ],
    bundlePolicy: 'max-bundle',
    rtcpMuxPolicy: 'require'
  };

  // ---------- Persistent device identity (for the inbox feature only) ----------
  const DEVICE_ID_KEY = 'wavelength_device_id';

  // Add your GIPHY Web API key here. GIPHY requires an API key for search.
  // Keep the key in the frontend config because GIPHY's Search endpoint is a client-side API.
  const GIPHY_API_KEY = window.GIPHY_API_KEY || '';
  const GIPHY_SEARCH_URL = 'https://api.giphy.com/v1/gifs/search';

  function getDeviceId() {
    let id = localStorage.getItem(DEVICE_ID_KEY);
    if (!id) {
      id = (crypto.randomUUID ? crypto.randomUUID() : 'dev-' + Math.random().toString(36).slice(2) + Date.now());
      localStorage.setItem(DEVICE_ID_KEY, id);
    }
    return id;
  }
  let myDeviceId = getDeviceId();
  let myAccountEmail = localStorage.getItem('wavelength_account_email') || null;

  // ---------- Account (optional email login on top of the anonymous system) ----------
  function updateAccountBarDisplay() {
    if (accountBarText) {
      accountBarText.textContent = myAccountEmail
        ? `👤 Signed in as ${myAccountEmail}`
        : '🔐 Sign in to keep your inbox everywhere';
    }
  }

  function updateSettingsAccountUI() {
    if (!settingsAccountText) return;
    if (myAccountEmail) {
      settingsAccountText.textContent = `Signed in as ${myAccountEmail}. Your inbox can follow your account across devices.`;
      if (settingsAccountAction) settingsAccountAction.textContent = '✎ Manage account';
      if (settingsSignOutBtn) settingsSignOutBtn.classList.remove('hidden');
      if (settingsProfileAccount) settingsProfileAccount.textContent = myAccountEmail;
    } else {
      settingsAccountText.textContent = 'You are using Wavelength anonymously on this device.';
      if (settingsAccountAction) settingsAccountAction.textContent = '🔐 Sign in / Create account';
      if (settingsSignOutBtn) settingsSignOutBtn.classList.add('hidden');
      if (settingsProfileAccount) settingsProfileAccount.textContent = 'Anonymous account';
    }
  }

  function refreshSettingsProfile() {
    const name = nameInput ? nameInput.value.trim() : '';
    if (settingsProfileName) settingsProfileName.textContent = name || 'Stranger';
    if (settingsAvatarPreview) renderAvatarInto(settingsAvatarPreview, getMyAvatarId());
    updateSettingsAccountUI();
  }

  function showAccountModal() {
    signupError.classList.add('hidden');
    loginError.classList.add('hidden');
    editError.classList.add('hidden');
    editSuccess.classList.add('hidden');
    if (myAccountEmail) {
      authTabsView.classList.add('hidden');
      accountEditView.classList.remove('hidden');
      accountEmailLabel.textContent = myAccountEmail;
      editEmail.value = '';
      editPassword.value = '';
      editCurrentPassword.value = '';
    } else {
      authTabsView.classList.remove('hidden');
      accountEditView.classList.add('hidden');
    }
    accountModal.classList.remove('hidden');
  }

  function hideAccountModal() {
    accountModal.classList.add('hidden');
  }

  if (accountBar) accountBar.addEventListener('click', showAccountModal);
  if (settingsAccountBtn) settingsAccountBtn.addEventListener('click', showAccountModal);
  if (settingsAccountAction) settingsAccountAction.addEventListener('click', showAccountModal);
  accountModalClose.addEventListener('click', hideAccountModal);
  accountModal.addEventListener('click', (e) => {
    if (e.target === accountModal) hideAccountModal();
  });

  tabSignup.addEventListener('click', () => {
    tabSignup.classList.add('auth-tab--active');
    tabLogin.classList.remove('auth-tab--active');
    signupForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
  });

  tabLogin.addEventListener('click', () => {
    tabLogin.classList.add('auth-tab--active');
    tabSignup.classList.remove('auth-tab--active');
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
  });

  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    signupError.classList.add('hidden');
    sendWs('signup', { email: signupEmail.value.trim(), password: signupPassword.value });
  });

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginError.classList.add('hidden');
    sendWs('login', { email: loginEmail.value.trim(), password: loginPassword.value });
  });

  editAccountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    editError.classList.add('hidden');
    editSuccess.classList.add('hidden');
    sendWs('update_account', {
      currentPassword: editCurrentPassword.value,
      newEmail: editEmail.value.trim() || undefined,
      newPassword: editPassword.value || undefined,
    });
  });

  signOutBtn.addEventListener('click', () => {
    // Signing out just forgets the "logged in" display on THIS browser —
    // the account itself still exists and can be logged back into anytime.
    // The deviceId (and its contacts/inbox) stays exactly as it is.
    myAccountEmail = null;
    localStorage.removeItem('wavelength_account_email');
    updateAccountBarDisplay();
    updateSettingsAccountUI();
    hideAccountModal();
  });

  if (settingsSignOutBtn) settingsSignOutBtn.addEventListener('click', () => signOutBtn.click());

  if (saveProfileBtn) saveProfileBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name) sendWs('set_name', { name });
    sendWs('set_avatar', { avatarId: getMyAvatarId() });
    profileSaveStatus.textContent = '✓ Profile saved';
    refreshSettingsProfile();
    setTimeout(() => { if (profileSaveStatus) profileSaveStatus.textContent = ''; }, 2200);
  });

  function handleAuthSuccess(msg) {
    myAccountEmail = msg.email;
    localStorage.setItem('wavelength_account_email', msg.email);
    updateAccountBarDisplay();
    updateSettingsAccountUI();
    refreshSettingsProfile();

    if (msg.deviceId && msg.deviceId !== myDeviceId) {
      // Logging in from a different browser/incognito: switch to the
      // account's canonical deviceId so its contacts/inbox come into view.
      myDeviceId = msg.deviceId;
      localStorage.setItem(DEVICE_ID_KEY, myDeviceId);
      sendWs('identify', { deviceId: myDeviceId });
      const name = nameInput.value.trim();
      if (name) sendWs('set_name', { name });
      sendWs('set_avatar', { avatarId: getMyAvatarId() });
      // The account may own a different canonical deviceId. Re-bind the
      // browser's push subscription to that device after the switch.
      if (Notification.permission === 'granted') {
        setTimeout(() => ensurePushSubscription(), 250);
      }
    }

    hideAccountModal();
    refreshInboxBadge();
  }

  // ---------- Contacts (legacy quick-reconnect codes, stored locally) ----------
  const CONTACTS_KEY = 'wavelength_contacts';

  function getLocalContacts() {
    try {
      return JSON.parse(localStorage.getItem(CONTACTS_KEY) || '[]');
    } catch {
      return [];
    }
  }

  function saveLocalContact(code, name) {
    const contacts = getLocalContacts().filter((c) => c.code !== code);
    contacts.unshift({ code, name: name || 'Stranger', addedAt: Date.now() });
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts.slice(0, 30)));
    renderLocalContacts();
  }

  function removeLocalContact(code) {
    const contacts = getLocalContacts().filter((c) => c.code !== code);
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
    renderLocalContacts();
  }

  function renderLocalContacts() {
    const contacts = getLocalContacts();
    if (contacts.length === 0) {
      contactsSection.classList.add('hidden');
      return;
    }
    contactsSection.classList.remove('hidden');
    contactsList.innerHTML = '';
    contacts.forEach((c) => {
      const row = document.createElement('div');
      row.className = 'contact-row';
      row.innerHTML = `
        <span class="contact-name">${escapeHtml(c.name)}</span>
        <div class="contact-actions">
          <button class="btn-chip contact-connect" data-code="${c.code}">Connect</button>
          <button class="btn-chip btn-chip--muted contact-remove" data-code="${c.code}">✕</button>
        </div>`;
      contactsList.appendChild(row);
    });

    contactsList.querySelectorAll('.contact-connect').forEach((btn) => {
      btn.addEventListener('click', () => {
        codeInput.value = btn.dataset.code;
        codeBtn.click();
      });
    });
    contactsList.querySelectorAll('.contact-remove').forEach((btn) => {
      btn.addEventListener('click', () => removeLocalContact(btn.dataset.code));
    });
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ---------- Timestamp helpers (for the WhatsApp-style Inbox) ----------

  // ---------- Chosen-avatar system (10 real image avatars) ----------
  const AVATAR_IDS = ['boy1', 'boy2', 'boy3', 'boy4', 'boy5', 'girl1', 'girl2', 'girl3', 'girl4', 'girl5'];

  function isValidAvatarId(id) {
    return AVATAR_IDS.includes(id);
  }

  function avatarSrc(id) {
    return `avatars/${isValidAvatarId(id) ? id : 'boy1'}.jpg`;
  }

  const AVATAR_ID_KEY = 'wavelength_avatar_id';

  function getMyAvatarId() {
    const stored = localStorage.getItem(AVATAR_ID_KEY);
    return isValidAvatarId(stored) ? stored : 'boy1';
  }

  function setMyAvatarId(id) {
    localStorage.setItem(AVATAR_ID_KEY, id);
    sendWs('set_avatar', { avatarId: id });
    renderAvatarPicker();
    refreshSettingsProfile();
  }

  function renderAvatarPicker() {
    const selected = getMyAvatarId();
    avatarGrid.innerHTML = '';
    AVATAR_IDS.forEach((id) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'avatar-option' + (id === selected ? ' avatar-option--selected' : '');
      btn.innerHTML = `<img src="${avatarSrc(id)}" alt="Avatar option" loading="lazy">`;
      btn.addEventListener('click', () => setMyAvatarId(id));
      avatarGrid.appendChild(btn);
    });
  }

  // Renders the chosen avatar image into any small circular avatar slot
  // (inbox rows, thread header, live chat header) given an avatar id.
  function renderAvatarInto(el, avatarId) {
    el.innerHTML = `<img src="${avatarSrc(avatarId)}" alt="Avatar">`;
  }

  function formatInboxTime(dateInput) {
    const date = new Date(dateInput);
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const isYesterday = date.toDateString() === yesterday.toDateString();

    if (isToday) {
      return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    }
    if (isYesterday) return 'Yesterday';
    const daysAgo = Math.floor((now - date) / 86400000);
    if (daysAgo < 7) return date.toLocaleDateString([], { weekday: 'short' });
    return date.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: '2-digit' });
  }

  function formatBubbleTime(dateInput) {
    return new Date(dateInput).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  }

  renderLocalContacts();

  // ---------- Screen switching ----------
  function showScreen(name) {
    Object.values(screens).forEach((s) => s.classList.add('hidden'));
    if (screens[name]) screens[name].classList.remove('hidden');
    if (bottomNav) {
      const visibleTab = ['landing', 'inbox', 'settings'].includes(name);
      bottomNav.classList.toggle('hidden', !visibleTab);
      bottomNav.querySelectorAll('.bottom-nav__item').forEach((item) => {
        item.classList.toggle('bottom-nav__item--active', item.dataset.tab === name);
      });
    }
  }


  // ---------- Android / browser Back button ----------
  // Exactly one history guard is kept for the app. Any non-home screen
  // (Settings, Inbox, live stranger chat, or contact thread) consumes Back
  // and returns to Home. Only Back while already on Home shows the close
  // confirmation dialog.
  let wavelengthBackReady = false;
  let wavelengthCloseDialog = null;

  function isHomeScreen() {
    return screens.landing && !screens.landing.classList.contains('hidden');
  }

  function createCloseDialog() {
    if (wavelengthCloseDialog) return wavelengthCloseDialog;

    const overlay = document.createElement('div');
    overlay.id = 'wavelengthCloseDialog';
    overlay.className = 'wavelength-close-overlay';
    overlay.innerHTML = `
      <div class="wavelength-close-dialog" role="dialog" aria-modal="true" aria-labelledby="wavelengthCloseTitle">
        <div class="wavelength-close-mark">✦</div>
        <div class="wavelength-close-kicker">WAVELENGTH</div>
        <h2 id="wavelengthCloseTitle">Do you want to close this app?</h2>
        <p>Are you sure you want to leave Wavelength?</p>
        <div class="wavelength-close-actions">
          <button type="button" class="wavelength-close-no">No</button>
          <button type="button" class="wavelength-close-yes">Yes</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const hide = () => {
      overlay.classList.remove('show');
      document.body.classList.remove('wavelength-dialog-open');
    };

    overlay.querySelector('.wavelength-close-no').addEventListener('click', hide);
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) hide();
    });

    overlay.querySelector('.wavelength-close-yes').addEventListener('click', () => {
      // Chrome only allows window.close() for windows opened by script.
      // Try it for supported contexts; otherwise keep the app in place.
      try { window.close(); } catch (_) {}
    });

    wavelengthCloseDialog = overlay;
    return overlay;
  }

  function showCloseDialog() {
    const dialog = createCloseDialog();
    dialog.classList.add('show');
    document.body.classList.add('wavelength-dialog-open');
  }

  function prepareBackGuard() {
    if (wavelengthBackReady) return;
    wavelengthBackReady = true;
    history.replaceState({ wavelength: 'home-root' }, '', location.href);
    history.pushState({ wavelength: 'home-guard' }, '', location.href);
  }

  window.addEventListener('popstate', () => {
    // IMPORTANT: never show the close dialog unless Home is already visible.
    if (!isHomeScreen()) {
      // Any tab or chat -> Home.
      if (screens.chat && !screens.chat.classList.contains('hidden')) {
        chatHistoryPushed = false;
        if (ws && ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ type: 'leave' }));
        }
        emojiPanel.classList.add('hidden');
      }

      if (screens.thread && !screens.thread.classList.contains('hidden')) {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
          stopRecording(false);
        }
        if (ws && ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ type: 'close_thread' }));
        }
        currentThreadContactId = null;
        sendWs('get_contacts');
      }

      showScreen('landing');
      refreshInboxBadge();
      history.pushState({ wavelength: 'home-guard' }, '', location.href);
      return;
    }

    // Home -> show close confirmation ONLY here.
    history.pushState({ wavelength: 'home-guard' }, '', location.href);
    showCloseDialog();
  });

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(prepareBackGuard, 50);
  });
  if (document.readyState !== 'loading') {
    setTimeout(prepareBackGuard, 50);
  }

  function randomFreq() {
    return (Math.random() * (108 - 88) + 88).toFixed(1);
  }
  setInterval(() => { dialFreq.textContent = randomFreq(); }, 900);

  // ---------- Boot ----------
  renderAvatarPicker();
  refreshSettingsProfile();
  updateSettingsAccountUI();
  updateAccountBarDisplay();
  connectSocket();
})();
