<?php

/* @var $this yii\web\View */
/* @var $form yii\bootstrap\ActiveForm */
/* @var $model app\models\LoginForm */

use yii\helpers\Html;
use yii\helpers\Url;
use yii\widgets\ActiveForm;


$this->title = 'Кабинет пользователя';
$this->params['breadcrumbs'][] = $this->title;
?>


<!-- start sAccProfile-->
			<div class="sAccProfile" id="sAccProfile">
				<div class="top-links">
					<div class="container">
						<div class="top-links__row row">
							<div class="col-auto"><a class="top-links__link active" href="#">
								<svg class="icon icon-top-link-1 d-xl-none">
									<use xlink:href="/web/img/svg/sprite.svg#top-link-1"></use>
								</svg><span class="top-links__txt"><span>Мой профиль</span></span></a>
							</div>
							<div class="col-auto"><a class="top-links__link" href="#">
								<svg class="icon icon-top-link-2 d-xl-none">
									<use xlink:href="/web/img/svg/sprite.svg#top-link-2"></use>
								</svg><span class="top-links__txt"><span class="d-none d-xl-block">Профиль компании</span><span class="d-xl-none">Компания</span></span></a>
							</div>
							<div class="col-auto"><a class="top-links__link" href="#">
								<svg class="icon icon-top-link-3 d-xl-none">
									<use xlink:href="/web/img/svg/sprite.svg#top-link-3"></use>
								</svg><span class="top-links__txt"><span>Вакансии</span></span></a>
							</div>
							<div class="col-auto"><a class="top-links__link" href="#">
								<svg class="icon icon-top-link-4 d-xl-none">
									<use xlink:href="/web/img/svg/sprite.svg#top-link-4"></use>
								</svg><span class="top-links__txt"><span>Отклики</span></span></a>
							</div>
							<div class="col-auto"><a class="top-links__link" href="#">
								<svg class="icon icon-top-link-5 d-xl-none">
									<use xlink:href="/web/img/svg/sprite.svg#top-link-5"></use>
								</svg><span class="top-links__txt"><span>Избранное</span></span></a>
							</div>
							<div class="col-auto"><a class="top-links__link" href="#">
								<svg class="icon icon-top-link-6 d-xl-none">
									<use xlink:href="/web/img/svg/sprite.svg#top-link-6"></use>
								</svg><span class="top-links__txt"><span>Уведомления</span></span></a>
							</div>
							<div class="col-auto"><a class="top-links__link" href="#">
								<svg class="icon icon-top-link-7 d-xl-none">
									<use xlink:href="/web/img/svg/sprite.svg#top-link-7"></use>
								</svg><span class="top-links__txt"><span>Настройки</span></span></a>
							</div>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="white-box">
						<div class="white-box__title">
							<div class="row align-items-center">
								<div class="white-box__title-col col">Мой профиль
								</div>
							</div>
						</div>
						<div class="white-box__content">
							<div class="tabs resp-tabs-js">
								<div class="tabs__caption row resp-tabs-list d-flex">
									<div class="tabs__btn col-auto resp-tab-btn tab-big">
                                        Персональные данные
									</div>
									<div class="tabs__btn col-auto resp-tab-btn tab-big">
                                        Безопасность
									</div>
								</div>
                                
                                <!--
                                <? $form = ActiveForm::begin(['fieldConfig' => ['template' => "{label}{input}{error}"],]); ?>
                                <? echo $form->field($profile, 'email')->input('text', ['class' => 'form-control', 'disabled' => true]); ?>
                                <? echo $form->field($profile, 'name')->input('text', ['class' => 'form-control']); ?>
                                <? echo $form->field($profile, 'lastname')->input('text', ['class' => 'form-control']); ?>
                                <?= Html::submitButton('Сохранить', ['class' => 'btn btn-default']); ?>
                                <? ActiveForm::end();?> -->
                                
                                
								<div class="tabs__wrap resp-tabs-container">
									<div class="tabs__content resp-tabs-content">
										<div class="form-wrap">
											<? $form = ActiveForm::begin(); ?>
												<div class="form-wrap__headline">Персональные данные
												</div>
												<div class="form-wrap__pd-row row">
                                                    
                                                    
                                                    
													<div class="form-wrap__inp-col col-xl-auto">
                                                        
														<div class="form-wrap__input-wrap form-group">
                                                            
                                                            <? echo $form->field($profile, 'email', ['template' => '<label><span class="form-wrap__input-title">{label}</span>{input}</label>'])->input('text', ['class' => 'form-wrap__input form-control', 'disabled' => true])->label('E-mail'); ?>
                    
                                                            
														</div>
                                                        
                                                        
                                                        <div class="form-wrap__input-wrap form-group">
                                                            
                                                            <? echo $form->field($profile, 'name', ['template' => '<label><span class="form-wrap__input-title">{label}</span>{input}</label>'])->input('text', ['class' => 'form-wrap__input form-control', 'disabled' => false])->label('Имя'); ?>
                    
                                                            
														</div>
                                                        
                                                        <div class="form-wrap__input-wrap form-group">
                                                            
                                                            <? echo $form->field($profile, 'lastname', ['template' => '<label><span class="form-wrap__input-title">{label}</span>{input}</label>'])->input('text', ['class' => 'form-wrap__input form-control', 'disabled' => false])->label('Фамилия'); ?>
                    
                                                            
														</div>
                                                       
                                                        <div class="form-wrap__input-wrap form-group">
                                                            
                                                            <? echo $form->field($profile, 'phone', ['template' => '<label><span class="form-wrap__input-title">{label}</span>{input}</label>'])->input('text', ['class' => 'form-wrap__input form-control', 'disabled' => false])->label('Телефон'); ?>
                    
                                                            
														</div>
                                                        
                                                        <div class="form-wrap__save-btn-cont">
                                                        <?= Html::submitButton('Сохранить', ['class' => 'form-wrap__save-btn']) ?>
                                                        </div>
													</div>
                                                    
                                                    
                                                    
                                                    
                                                    
													<div class="col-xl-auto">
														<div class="form-wrap__foto">
															<div class="form-wrap__f-img"><img loading="lazy" src="/web/img/svg/photo-stab-big.svg" alt=""/>
															</div><a class="form-wrap__f-btn" href="#">
															<svg class="icon icon-plus ">
																<use xlink:href="/web/img/svg/sprite.svg#plus"></use>
															</svg><span>Загрузить</span></a>
														</div>
													</div>
												</div>
											<? ActiveForm::end();?>
										</div>
									</div>
									<div class="tabs__content resp-tabs-content">
										<div class="form-wrap">
											<form>
												<div class="form-wrap__headline">Безопасность
												</div>
												<div class="form-wrap__pd-row row">
													<div class="form-wrap__inp-col col-xl-auto">
														<div class="form-wrap__input-wrap form-group">
															<label><span class="form-wrap__input-title">Новый пароль:</span><span class="inp-cont d-block"><input class="form-wrap__input form-control" type="password" required="required" name="pass" placeholder="Введите новый пароль"/><span class="show-hide-btn toggle-pass-inp-js">
																		<svg class="icon icon-pass-eye ">
																			<use xlink:href="/web/img/svg/sprite.svg#pass-eye"></use>
																		</svg></span></span>
															</label>
														</div>
														<div class="form-wrap__input-wrap form-group">
															<label><span class="form-wrap__input-title">Повторите пароль:</span><span class="inp-cont d-block"><input class="form-wrap__input form-control" type="password" required="required" name="pass" placeholder="Повторите новый пароль"/><span class="show-hide-btn toggle-pass-inp-js">
																		<svg class="icon icon-pass-eye ">
																			<use xlink:href="/web/img/svg/sprite.svg#pass-eye"></use>
																		</svg></span></span>
															</label>
														</div>
														<div class="form-wrap__save-btn-cont">
															<button class="form-wrap__save-btn" type="submit">Сохранить
															</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- end sAccProfile-->


<!--
<div class="site-login">
    <h1>Мой профиль</h1>
</div>

<hr>
<h6>
    <? if(Yii::$app->user->identity->type == 'employer') :?>
        <?= Html::a('Мой профиль', ['/cabinet']) ?> /
        <?= Html::a('Профиль компании', ['/cabinet/company']) ?> /
        <?= Html::a('Вакансии', ['/cabinet/vacancy']) ?> /
        <?= Html::a('Настройки', ['/cabinet/setting']) ?> /
        <?= Html::a('Уведомления', ['/cabinet/notification']) ?> /
        <?= Html::a('Избранное', ['/cabinet/favorites']) ?> /
        <?= Html::a('Партнерская программа', ['/cabinet/partner']) ?> /
        <?= Html::a('Баланс', ['/cabinet/balance']) ?> /
        <?= Html::a('Тарифы', ['/cabinet/tarif']) ?>
    <? else:?>
    <? endif;?>
</h6>
<hr>




<hr>
<h4>Безопасность:</h4>
<hr>
<? $form = ActiveForm::begin(['fieldConfig' => ['template' => "{label}{input}{error}"],]); ?>
<? echo $form->field($password, 'password')->input('password', ['class' => 'form-control', 'placholder' => 'Введите новый пароль']); ?>
<? echo $form->field($password, 'password_repeat')->input('password', ['class' => 'form-control', 'placeholder' => 'Повторите пароль']); ?>
<?= Html::submitButton('Сохранить', ['class' => 'btn btn-default']); ?>
<? ActiveForm::end();?>
-->