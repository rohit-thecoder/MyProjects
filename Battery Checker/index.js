const batteryLevel = document.getElementById('level');
const batteryPercentText = document.getElementById('percentage');
const chargingStatusText = document.getElementById('charging');

navigator.getBattery().then(battery => {
  function updateBatteryInfo() {
    let level = Math.floor(battery.level * 100);
    batteryLevel.style.width = level + '%';
    batteryPercentText.textContent = `Battery: ${level}%`;
    chargingStatusText.textContent = `Charging: ${battery.charging ? 'Yes ✅' : 'No ❌'}`;
  }

  updateBatteryInfo();

  // Update
  battery.addEventListener('levelchange', updateBatteryInfo);
  battery.addEventListener('chargingchange', updateBatteryInfo);
});
