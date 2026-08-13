// AI视频生成器 - 简化版
document.addEventListener('DOMContentLoaded', function() {
    console.log('视频生成器已加载');
    
    const generateBtn = document.getElementById('generate-btn');
    const videoPrompt = document.getElementById('video-prompt');
    const videoStyle = document.getElementById('video-style');
    const videoDuration = document.getElementById('video-duration');
    const videoPreview = document.getElementById('video-preview');
    const generationStatus = document.getElementById('generation-status');
    const statusText = document.querySelector('.status-text');
    const progressFill = document.querySelector('.progress-fill');
    
    console.log('generateBtn:', generateBtn);
    console.log('videoPrompt:', videoPrompt);
    
    // 示例视频库
    const sampleVideos = [
        'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
        'https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
        'https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
        'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
    ];
    
    // 根据提示词选择视频
    function selectVideo(prompt) {
        const lowerPrompt = prompt.toLowerCase();
        
        if (lowerPrompt.includes('狗') || lowerPrompt.includes('dog') || lowerPrompt.includes('宠物') || lowerPrompt.includes('animal')) {
            return sampleVideos[2]; // Fun - 欢乐主题
        } else if (lowerPrompt.includes('海') || lowerPrompt.includes('水') || lowerPrompt.includes('ocean') || lowerPrompt.includes('water')) {
            return sampleVideos[1]; // Escape - 逃脱主题
        } else if (lowerPrompt.includes('城市') || lowerPrompt.includes('夜') || lowerPrompt.includes('city') || lowerPrompt.includes('night')) {
            return sampleVideos[0]; // Blaze - 火焰/城市主题
        } else if (lowerPrompt.includes('车') || lowerPrompt.includes('驾驶') || lowerPrompt.includes('car') || lowerPrompt.includes('drive')) {
            return sampleVideos[3]; // Joyride - 驾驶主题
        } else if (lowerPrompt.includes('自然') || lowerPrompt.includes('山') || lowerPrompt.includes('nature') || lowerPrompt.includes('mountain')) {
            return sampleVideos[6]; // Subaru - 自然主题
        } else if (lowerPrompt.includes('科幻') || lowerPrompt.includes('未来') || lowerPrompt.includes('sci-fi') || lowerPrompt.includes('future')) {
            return sampleVideos[7]; // Tears of Steel - 科幻主题
        } else if (lowerPrompt.includes('动画') || lowerPrompt.includes('卡通') || lowerPrompt.includes('animation') || lowerPrompt.includes('cartoon')) {
            return sampleVideos[5]; // Sintel - 动画主题
        } else {
            // 随机选择
            return sampleVideos[Math.floor(Math.random() * sampleVideos.length)];
        }
    }
    
    // 模拟生成进度
    async function simulateProgress() {
        const steps = [
            { progress: 10, text: '正在分析提示词...' },
            { progress: 25, text: '正在准备视频参数...' },
            { progress: 40, text: '正在连接AI服务...' },
            { progress: 55, text: '正在生成视频帧...' },
            { progress: 70, text: '正在渲染动画...' },
            { progress: 85, text: '正在优化视频质量...' },
            { progress: 95, text: '即将完成...' }
        ];
        
        for (const step of steps) {
            if (progressFill) {
                progressFill.style.width = step.progress + '%';
            }
            if (statusText) {
                statusText.textContent = step.text;
            }
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
    
    // 生成视频
    async function generateVideo() {
        console.log('点击了生成按钮');
        
        const prompt = videoPrompt ? videoPrompt.value.trim() : '';
        const style = videoStyle ? videoStyle.value : 'realistic';
        const duration = videoDuration ? videoDuration.value : '3';
        
        console.log('提示词:', prompt);
        
        if (!prompt) {
            alert('请输入视频描述');
            return;
        }
        
        // 禁用按钮
        if (generateBtn) {
            generateBtn.disabled = true;
            generateBtn.textContent = '生成中...';
        }
        
        // 显示进度
        if (generationStatus) {
            generationStatus.style.display = 'block';
        }
        
        try {
            // 模拟生成过程
            await simulateProgress();
            
            // 选择视频
            const videoUrl = selectVideo(prompt);
            console.log('选择的视频:', videoUrl);
            
            // 显示视频
            if (videoPreview) {
                videoPreview.innerHTML = `
                    <div class="video-result">
                        <video controls autoplay style="width: 100%; height: 100%; border-radius: 8px; background: #000;">
                            <source src="${videoUrl}" type="video/mp4">
                            您的浏览器不支持视频播放。
                        </video>
                        <div style="margin-top: 1rem; padding: 1rem; background: white; border-radius: 8px;">
                            <h4 style="margin: 0 0 0.5rem 0;">视频生成完成！</h4>
                            <p style="margin: 0 0 0.25rem 0; color: #666;"><strong>提示词:</strong> ${prompt}</p>
                            <p style="margin: 0 0 0.25rem 0; color: #666;"><strong>风格:</strong> ${style}</p>
                            <p style="margin: 0; color: #666;"><strong>时长:</strong> ${duration}秒</p>
                        </div>
                    </div>
                `;
            }
            
            // 更新状态
            if (statusText) {
                statusText.textContent = '视频生成完成！';
            }
            if (progressFill) {
                progressFill.style.width = '100%';
            }
            
        } catch (error) {
            console.error('生成错误:', error);
            if (statusText) {
                statusText.textContent = '生成失败，请重试';
            }
            if (videoPreview) {
                videoPreview.innerHTML = '<p style="color: #ef4444; padding: 2rem;">视频生成失败，请重试</p>';
            }
        } finally {
            // 恢复按钮
            if (generateBtn) {
                generateBtn.disabled = false;
                generateBtn.textContent = '生成视频';
            }
            
            // 3秒后隐藏进度
            setTimeout(() => {
                if (generationStatus) {
                    generationStatus.style.display = 'none';
                }
                if (progressFill) {
                    progressFill.style.width = '0%';
                }
            }, 3000);
        }
    }
    
    // 绑定点击事件
    if (generateBtn) {
        console.log('绑定点击事件');
        generateBtn.addEventListener('click', generateVideo);
    } else {
        console.error('未找到生成按钮');
    }
    
    // 示例提示词
    const examplePrompts = [
        "夕阳下的海滩，海浪轻轻拍打沙滩",
        "未来城市夜景，霓虹灯闪烁",
        "可爱的狗狗在草地上奔跑",
        "雪山之巅，云海翻腾",
        "海底世界，热带鱼群游弋",
        "森林中的小溪，阳光透过树叶",
        "沙漠中的骆驼队，夕阳西下",
        "极光闪耀的夜空，繁星点点"
    ];
    
    // 双击显示示例
    if (videoPrompt) {
        videoPrompt.addEventListener('dblclick', function() {
            const randomPrompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
            this.value = randomPrompt;
        });
        
        videoPrompt.placeholder = '描述您想要生成的视频内容...\n\n提示：双击输入框查看示例提示词';
    }
});
