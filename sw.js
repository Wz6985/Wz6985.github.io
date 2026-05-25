// 自动清理旧版本数据
localStorage.removeItem('randomPickerData');

// 从本地存储读取
let data = null;
try {
    const raw = localStorage.getItem('randomPickerDataV2');
    if (raw) {
        const parsed = JSON.parse(raw);
        // 验证数据格式是否正确
        const firstCat = Object.keys(parsed)[0];
        if (parsed[firstCat].length > 0 && typeof parsed[firstCat][0] === 'object' && parsed[firstCat][0].name !== undefined) {
            data = parsed;
        }
    }
} catch(e) {}

if (!data) {
    data = JSON.parse(JSON.stringify(defaultData));
    saveData();
}
