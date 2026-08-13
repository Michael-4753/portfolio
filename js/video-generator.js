// AI瑙嗛鐢熸垚鍣ㄥ姛鑳?document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate-btn');
    const videoPrompt = document.getElementById('video-prompt');
    const videoStyle = document.getElementById('video-style');
    const videoDuration = document.getElementById('video-duration');
    const videoPreview = document.getElementById('video-preview');
    const generationStatus = document.getElementById('generation-status');
    const statusText = document.querySelector('.status-text');
    const progressFill = document.querySelector('.progress-fill');
    
    // 妯℃嫙鐨勮棰戠敓鎴怉PI锛堝疄闄呬娇鐢ㄦ椂鍙浛鎹负鐪熷疄API锛?    class AIVideoGenerator {
        constructor() {
            this.isGenerating = false;
            this.currentProgress = 0;
        }
        
        // 妯℃嫙瑙嗛鐢熸垚杩囩▼
        async generateVideo(prompt, style, duration) {
            if (this.isGenerating) {
                console.log('瑙嗛姝ｅ湪鐢熸垚涓紝璇风◢鍊?..');
                return null;
            }
            
            this.isGenerating = true;
            this.currentProgress = 0;
            
            console.log('寮€濮嬬敓鎴愯棰?..');
            console.log(`鎻愮ず璇? ${prompt}`);
            console.log(`椋庢牸: ${style}`);
            console.log(`鏃堕暱: ${duration}绉抈);
            
            // 妯℃嫙鐢熸垚杩涘害
            return new Promise((resolve) => {
                const progressInterval = setInterval(() => {
                    this.currentProgress += Math.random() * 15;
                    
                    if (this.currentProgress >= 100) {
                        this.currentProgress = 100;
                        clearInterval(progressInterval);
                        
                        // 妯℃嫙鐢熸垚瀹屾垚
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
                    
                    // 鏇存柊杩涘害鏉?                    if (progressFill) {
                        progressFill.style.width = `${this.currentProgress}%`;
                    }
                    
                    // 鏇存柊鐘舵€佹枃鏈?                    if (statusText) {
                        if (this.currentProgress < 30) {
                            statusText.textContent = '姝ｅ湪鍒嗘瀽鎻愮ず璇?..';
                        } else if (this.currentProgress < 60) {
                            statusText.textContent = '姝ｅ湪鐢熸垚瑙嗛甯?..';
                        } else if (this.currentProgress < 90) {
                            statusText.textContent = '姝ｅ湪浼樺寲瑙嗛璐ㄩ噺...';
                        } else {
                            statusText.textContent = '鍗冲皢瀹屾垚...';
                        }
                    }
                }, 300);
            });
        }
        
        // 鐢熸垚妯℃嫙瑙嗛URL
        generateMockVideoUrl(prompt, style) {
            // 杩欓噷鍙互闆嗘垚鐪熷疄鐨勮棰戠敓鎴怉PI
            // 渚嬪: Runway, Pika, Seedance, 娴疯灪AI 绛?            return `https://example.com/videos/${style}_${Date.now()}.mp4`;
        }
        
        // 闆嗘垚鐪熷疄API鐨勭ず渚嬫柟娉?        async integrateWithRealAPI(prompt, style, duration, apiKey) {
            // 绀轰緥锛氶泦鎴怱eedance API (鍥藉唴鍙敤)
            const seedanceAPI = {
                endpoint: 'https://api.seedance.com/v1/generate',
                params: {
                    prompt: prompt,
                    style: style,
                    duration: duration,
                    api_key: apiKey
                }
            };
            
            // 绀轰緥锛氶泦鎴愭捣铻篈I API (鍥藉唴鍙敤)
            const hailuoAPI = {
                endpoint: 'https://api.minimax.chat/v1/video/generate',
                params: {
                    prompt: prompt,
                    style: style,
                    duration: duration,
                    api_key: apiKey
                }
            };
            
            // 绀轰緥锛氶泦鎴怣agic Hour API (鍏嶈垂棰濆害)
            const magicHourAPI = {
                endpoint: 'https://api.magichour.ai/v1/generate',
                params: {
                    prompt: prompt,
                    style: style,
                    duration: duration,
                    api_key: apiKey
                }
            };
            
            console.log('API闆嗘垚绀轰緥:', { seedanceAPI, hailuoAPI, magicHourAPI });
            
            // 瀹為檯瀹炵幇鏃讹紝鍦ㄨ繖閲岃皟鐢ㄧ湡瀹炵殑API
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
            //     console.error('API璋冪敤澶辫触:', error);
            //     throw error;
            // }
        }
    }
    
    // 鍒涘缓瑙嗛鐢熸垚鍣ㄥ疄渚?    const videoGenerator = new AIVideoGenerator();
    
    // 鐢熸垚鎸夐挳鐐瑰嚮浜嬩欢
    if (generateBtn) {
        generateBtn.addEventListener('click', async function() {
            const prompt = videoPrompt.value.trim();
            const style = videoStyle.value;
            const duration = videoDuration.value;
            
            if (!prompt) {
                alert('璇疯緭鍏ヨ棰戞弿杩?);
                return;
            }
            
            // 绂佺敤鎸夐挳锛屾樉绀虹敓鎴愮姸鎬?            generateBtn.disabled = true;
            generateBtn.textContent = '鐢熸垚涓?..';
            generationStatus.style.display = 'block';
            
            try {
                // 寮€濮嬬敓鎴愯棰?                const result = await videoGenerator.generateVideo(prompt, style, duration);
                
                if (result && result.success) {
                    // 鐢熸垚鎴愬姛
                    videoPreview.innerHTML = `
                        <div class="video-result">
                            <video controls style="width: 100%; height: 100%; border-radius: 8px;">
                                <source src="${result.videoUrl}" type="video/mp4">
                                鎮ㄧ殑娴忚鍣ㄤ笉鏀寔瑙嗛鎾斁銆?                            </video>
                            <div class="video-info" style="margin-top: 1rem; padding: 1rem; background: white; border-radius: 8px;">
                                <h4>瑙嗛鐢熸垚瀹屾垚</h4>
                                <p><strong>鎻愮ず璇?</strong> ${result.prompt}</p>
                                <p><strong>椋庢牸:</strong> ${result.style}</p>
                                <p><strong>鏃堕暱:</strong> ${result.duration}绉?/p>
                            </div>
                        </div>
                    `;
                    
                    statusText.textContent = '瑙嗛鐢熸垚瀹屾垚锛?;
                    progressFill.style.width = '100%';
                } else {
                    throw new Error('瑙嗛鐢熸垚澶辫触');
                }
            } catch (error) {
                console.error('瑙嗛鐢熸垚閿欒:', error);
                statusText.textContent = '鐢熸垚澶辫触锛岃閲嶈瘯';
                videoPreview.innerHTML = '<p style="color: #ef4444;">瑙嗛鐢熸垚澶辫触锛岃妫€鏌ヨ緭鍏ュ苟閲嶈瘯</p>';
            } finally {
                // 鎭㈠鎸夐挳鐘舵€?                generateBtn.disabled = false;
                generateBtn.textContent = '鐢熸垚瑙嗛';
                
                // 3绉掑悗闅愯棌鐘舵€?                setTimeout(() => {
                    generationStatus.style.display = 'none';
                    progressFill.style.width = '0%';
                }, 3000);
            }
        });
    }
    
    // 娣诲姞绀轰緥鎻愮ず璇嶅姛鑳?    const examplePrompts = [
        "澶曢槼涓嬬殑娴锋哗锛屾捣娴交杞绘媿鎵撴矙婊╋紝閲戣壊闃冲厜娲掑湪姘撮潰涓?,
        "鏈潵鍩庡競澶滄櫙锛岄湏铏圭伅闂儊锛岄琛屾苯杞︾┛姊叾涓?,
        "妯辫姳鏍戜笅锛岃姳鐡ｉ殢椋庨钀斤紝灏戝コ鍦ㄦ爲涓嬭涔?,
        "闆北涔嬪穮锛屼簯娴风炕鑵撅紝鏃ュ嚭鏃跺垎鐨勫．涓芥櫙鑹?,
        "娴峰簳涓栫晫锛岃壊褰╂枒鏂撶殑鐝婄憵绀侊紝鐑甫楸肩兢娓稿紜"
    ];
    
    // 鍙屽嚮鎻愮ず璇嶈緭鍏ユ鏄剧ず绀轰緥
    if (videoPrompt) {
        videoPrompt.addEventListener('dblclick', function() {
            const randomPrompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
            this.value = randomPrompt;
        });
        
        // 娣诲姞鎻愮ず
        videoPrompt.placeholder = '鎻忚堪鎮ㄦ兂瑕佺敓鎴愮殑瑙嗛鍐呭...\n\n鎻愮ず锛氬弻鍑昏緭鍏ユ鏌ョ湅绀轰緥鎻愮ず璇?;
    }
    
    // 瀵煎嚭瑙嗛鐢熸垚鍣ㄤ緵鍏朵粬鑴氭湰浣跨敤
    window.AIVideoGenerator = AIVideoGenerator;
});