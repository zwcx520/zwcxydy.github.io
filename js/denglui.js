	var clipboard = new Clipboard('.copy');
	clipboard.on('success', function(e) {
		console.log(e);
	});
	clipboard.on('error', function(e) {
		console.log(e);
	});
	$('#mail').click(function(){
		$('#copyed').css('opacity',1)
			setTimeout(function(){
			$('#copyed').css('opacity',0)
		},2000)
	})
	$('#one_part,#two_part,#three_part,#four_part,#five_part').hover(function(){
		var that = $(this)
		var target = that.attr('id').replace('_part','')
		$('.focus .txt').hide()
		$('#'+target).show()
	},function(){
		$('.focus .txt').hide()
		$('#default').show()
	})
	$('#code').focus(function(){
		$('#code').attr('placeholder','请输入提取码')
		$('#code_error').hide()
	})
	$('#down').click(function(){
		var that = $(this)
		var code = $('#code').val();
		if(code != 'zwcx'){ //提取码
			$('#code').attr('placeholder','').val('')
			$('#code_error').show()
			return false;
		}
		that.attr('href','https://lcy20.netlify.app')//提取码成功跳转地址
		that.attr('target','_blank')
	})