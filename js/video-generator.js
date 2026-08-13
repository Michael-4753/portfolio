// AI视频生成器功能
document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate-btn');
    const videoPrompt = document.getElementById('video-prompt');
    const videoStyle = document.getElementById('video-style');
    const videoDuration = document.getElementById('video-duration');
    const videoPreview = document.getElementById('video-preview');
    const generationStatus = document.getElementById('generation-status');
    const statusText = document.querySelector('.status-text');
    const progressFill = document.querySelector('.progress-fill');
    
    // 模拟的视频生成API（实际使用时可替换为真实API）
    class AIVideoGenerator {
        constructor() {
            this.isGenerating = false;
            this.currentProgress = 0;
        }
        
        // 模拟视频生成过程
        async generateVideo(prompt, style, duration) {
            if (this.isGenerating) {
                console.log('视频正在生成中，请稍候...');
                return null;
            }
            
            this.isGenerating = true;
            this.currentProgress = 0;
            
            console.log('开始生成视频...');
            console.log(`提示词: ${prompt}`);
            console.log(`风格: ${style}`);
            console.log(`时长: ${duration}秒`);
            
            // 模拟生成进度
            return new Promise((resolve) => {
                const progressInterval = setInterval(() => {
                    this.currentProgress += Math.random() * 15;
                    
                    if (this.currentProgress >= 100) {
                        this.currentProgress = 100;
                        clearInterval(progressInterval);
                        
                        // 模拟生成完成
                        setTimeout(() => {
                            this.isGenerating = false;
                            resolve({
                                success: true,
                                videoUrl: this.generateMockVideoUrl(prompt, style),
                                duration: duration,
                                style: style,
                                prompt: prompt
                            });
                        }, 500);
                    }
                    
                    // 更新进度条
                    if (progressFill) {
                        progressFill.style.width = `${this.currentProgress}%`;
                    }
                    
                    // 更新状态文本
                    if (statusText) {
                        if (this.currentProgress < 30) {
                            statusText.textContent = '正在分析提示词...';
                        } else if (this.currentProgress < 60) {
                            statusText.textContent = '正在生成视频帧...';
                        } else if (this.currentProgress < 90) {
                            statusText.textContent = '正在优化视频质量...';
                        } else {
                            statusText.textContent = '即将完成...';
                        }
                    }
                }, 300);
            });
        }
        
        // 生成模拟视频URL
        generateMockVideoUrl(prompt, style) {
            // 这里可以集成真实的视频生成API
            // 例如: Runway, Pika, Seedance, 海螺AI 等
            return `https://example.com/videos/${style}_${Date.now()}.mp4`;
        }
        
        // 集成真实API的示例方法
        async integrateWithRealAPI(prompt, style, duration, apiKey) {
            // 示例：集成Seedance API (国内可用)
            const seedanceAPI = {
                endpoint: 'https://api.seedance.com/v1/generate',
                params: {
                    prompt: prompt,
                    style: style,
                    duration: duration,
                    api_key: apiKey
                }
            };
            
            // 示例：集成海螺AI API (国内可用)
            const hailuoAPI = {
                endpoint: 'https://api.minimax.chat/v1/video/generate',
                params: {
                    prompt: prompt,
                    style: style,
                    duration: duration,
                    api_key: apiKey
                }
            };
            
            // 示例：集成Magic Hour API (免费额度)
            const magicHourAPI = {
                endpoint: 'https://api.magichour.ai/v1/generate',
                params: {
                    prompt: prompt,
                    style: style,
                    duration: duration,
                    api_key: apiKey
                }
            };
            
            console.log('API集成示例:', { seedanceAPI, hailuoAPI, magicHourAPI });
            
            // 实际实现时，在这里调用真实的API
            // try {
            //     const response = await fetch(seedanceAPI.endpoint, {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Authorization': `Bearer ${apiKey}`
            //         },
            //         body: JSON.stringify(seedanceAPI.params)
            //     });
            //     return await response.json();
            // } catch (error) {
            //     console.error('API调用失败:', error);
            //     throw error;
            // }
        }
    }
    
    // 创建视频生成器实例
    const videoGenerator = new AIVideoGenerator();
    
    // 生成按钮点击事件
    if (generateBtn) {
        generateBtn.addEventListener('click', async function() {
            const prompt = videoPrompt.value.trim();
            const style = videoStyle.value;
            const duration = videoDuration.value;
            
            if (!prompt) {
                alert('请输入视频描述');
                return;
            }
            
            // 禁用按钮，显示生成状态
            generateBtn.disabled = true;
            generateBtn.textContent = '生成中...';
            generationStatus.style.display = 'block';
            
            try {
                // 开始生成视频
                const result = await videoGenerator.generateVideo(prompt, style, duration);
                
                if (result && result.success) {
                    // 生成成功
                    videoPreview.innerHTML = `
                        <div class="video-result">
                            <video controls style="width: 100%; height: 100%; border-radius: 8px;">
                                <source src="${result.videoUrl}" type="video/mp4">
                                您的浏览器不支持视频播放。
                            </video>
                            <div class="video-info" style="margin-top: 1rem; padding: 1rem; background: white; border-radius: 8px;">
                                <h4>视频生成完成</h4>
                                <p><strong>提示词:</strong> ${result.prompt}</p>
                                <p><strong>风格:</strong> ${result.style}</p>
                                <p><strong>时长:</strong> ${result.duration}秒</p>
                            </div>
                        </div>
                    `;
                    
                    statusText.textContent = '视频生成完成！';
                    progressFill.style.width = '100%';
                } else {
                    throw new Error('视频生成失败');
                }
            } catch (error) {
                console.error('视频生成错误:', error);
                statusText.textContent = '生成失败，请重试';
                videoPreview.innerHTML = '<p style="color: #ef4444;">视频生成失败，请检查输入并重试</p>';
            } finally {
                // 恢复按钮状态
                generateBtn.disabled = false;
                generateBtn.textContent = '生成视频';
                
                // 3秒后隐藏状态
                setTimeout(() => {
                    generationStatus.style.display = 'none';
                    progressFill.style.width = '0%';
                }, 3000);
            }
        });
    }
    
    // 添加示例提示词功能
    const examplePrompts = [
        "夕阳下的海滩，海浪轻轻拍打沙滩，金色阳光洒在水面上",
        "未来城市夜景，霓虹灯闪烁，飞行汽车穿梭其中",
        "樱花树下，花瓣随风飘落，少女在树下读书",
        "雪山之巅，云海翻腾，日出时分的壮丽景色",
        "海底世界，色彩斑斓的珊瑚礁，热带鱼群游弋"
    ];
    
    // 双击提示词输入框显示示例
    if (videoPrompt) {
        videoPrompt.addEventListener('dblclick', function() {
            const randomPrompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
            this.value = randomPrompt;
        });
        
        // 添加提示
        videoPrompt.placeholder = '描述您想要生成的视频内容...\n\n提示：双击输入框查看示例提示词';
    }
    
    // 导出视频生成器供其他脚本使用
    window.AIVideoGenerator = AIVideoGenerator;
});