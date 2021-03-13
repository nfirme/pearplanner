from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def at_mismatched_passwords(driver):
    #GIVEN: You're on the sign up page
    #WHEN: The passwords in signup are mismatched
    #THEN: The submission will not be clickable
    driver.get('http://localhost:3000/')
    e = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "sign-up")))
    e.click()
    email = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "email")))
    email.send_keys("test@test.com")
    pw = driver.find_element_by_id("password")
    pw.send_keys("Hello!")
    cpw = driver.find_element_by_id("confirmPass")
    cpw.send_keys("hello!")
    assert driver.find_element_by_id("send-sign-up").get_attribute("disabled") is not None

def at_matched_passwords(driver):
    #GIVEN: You're on the sign up page
    #WHEN: The passwords in signup are matched
    #THEN: The submission will be clickable
    driver.get('http://localhost:3000/')
    e = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "sign-up")))
    e.click()
    email = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "email")))
    email.send_keys("test@test.com")
    pw = driver.find_element_by_id("password")
    pw.send_keys("Hello!")
    cpw = driver.find_element_by_id("confirmPass")
    cpw.send_keys("Hello!")
    clickable = driver.find_element_by_id("send-sign-up")
    assert clickable.get_attribute("disabled") is None

def at_sign_in_bad_pw(driver):
    #GIVEN: You're trying to login
    #WHEN: You provide the wrong password
    #THEN: You will not be able to log in
    driver.get('http://localhost:3000/')
    e = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "login")))
    e.click()
    email = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "email")))
    email.send_keys("newGuy@aol.com")
    pw = driver.find_element_by_id("password")
    pw.send_keys("WhoDis")
    clickable = driver.find_element_by_id("send-login")
    assert clickable.get_attribute("disabled") is None
    clickable.click()
    time.sleep(2)
    assert driver.current_url == "http://localhost:3000/"

def at_sign_in_no_pw(driver):
    #GIVEN: You're trying to login
    #WHEN: You don't provide the password
    #THEN: You will not be able to log in
    driver.get('http://localhost:3000/')
    e = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "login")))
    e.click()
    email = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "email")))
    email.send_keys("newGuy@aol.com")
    clickable = driver.find_element_by_id("send-login")
    assert clickable.get_attribute("disabled") is not None

def at_sign_in_bad_user(driver):
    #GIVEN: You're trying to login
    #WHEN: You provide the wrong username
    #THEN: You will not be able to log in
    driver.get('http://localhost:3000/')
    e = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "login")))
    e.click()
    email = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "email")))
    email.send_keys("emailDNE@test.com")
    pw = driver.find_element_by_id("password")
    pw.send_keys("WhoDis?")
    clickable = driver.find_element_by_id("send-login")
    assert clickable.get_attribute("disabled") is None
    clickable.click()
    time.sleep(2)
    assert driver.current_url == "http://localhost:3000/"

def at_sign_in_no_user(driver):
    #GIVEN: You're trying to login
    #WHEN: You provide no password
    #THEN: You will not be able to log in
    driver.get('http://localhost:3000/')
    e = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "login")))
    e.click()
    pw = driver.find_element_by_id("password")
    pw.send_keys("WhoDis?")
    clickable = driver.find_element_by_id("send-login")
    assert clickable.get_attribute("disabled") is not None

def at_sign_in_good_user(driver):
    #GIVEN: You're trying to login
    #WHEN: You provide the correct username and password combination
    #THEN: You will be able to log in
    driver.get('http://localhost:3000/')
    e = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "login")))
    e.click()
    email = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "email")))
    email.send_keys("newGuy@aol.com")
    pw = driver.find_element_by_id("password")
    pw.send_keys("WhoDis?")
    clickable = driver.find_element_by_id("send-login")
    clickable.click()
    e = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "sign-out")))
    assert driver.current_url == "http://localhost:3000/app"

def at_keep_sign_in(driver):
    driver.get("http://localhost:3000/")
    sign = driver.find_element_by_id("sign-in")
    sign.click()
    e = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "sign-out")))
    assert driver.current_url == "http://localhost:3000/app"

def at_make_new_account(driver, new_user, new_pw):
    driver.get('http://localhost:3000/')
    e = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "sign-up")))
    e.click()
    email = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "email")))
    email.send_keys(new_user)
    pw = driver.find_element_by_id("password")
    pw.send_keys(new_pw)
    cpw = driver.find_element_by_id("confirmPass")
    cpw.send_keys(new_pw)
    clickable = driver.find_element_by_id("send-sign-up")
    clickable.click()
    driver.get('http://localhost:3000/')
    e = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "sign-up")))
    assert driver.current_url == "http://localhost:3000/"

def at_sign_into_new_account(driver, new_user, new_pw):
    driver.get('http://localhost:3000/')
    e = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "login")))
    e.click()
    email = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "email")))
    email.send_keys(new_user)
    pw = driver.find_element_by_id("password")
    pw.send_keys(new_pw)
    clickable = driver.find_element_by_id("send-login")
    clickable.click()
    e = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "sign-out")))
    assert driver.current_url == "http://localhost:3000/app"

def at_make_new_class(driver):
    #GIVEN: You're logged in
    #WHEN: You click on new course
    #THEN: You will be able to enter a new course
    clickable = driver.find_element_by_id("new-course")
    clickable.click()
    field = driver.find_element_by_id("field1")
    field.send_keys("CSC 323")
    field = driver.find_element_by_id("field2")
    field.send_keys("Cryptography")
    field = driver.find_element_by_id("field3")
    field.send_keys("Zachary Peterson")
    clickable = driver.find_element_by_id("submit-new-course")
    clickable.click()

def at_sign_out(driver):
    sign = driver.find_element_by_id("sign-out")
    sign.click()
    e = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "sign-in")))
    assert driver.current_url == "http://localhost:3000/"

if __name__ == "__main__":
    options = webdriver.ChromeOptions()
    options.add_experimental_option('excludeSwitches', ['enable-logging'])
    driver = webdriver.Chrome(options=options)
    new_user = "newguy2@aol.com" #CHANGE EACH TIME YOU RUN THIS FILE
    new_pw = "e"
    at_mismatched_passwords(driver)
    at_matched_passwords(driver)
    at_sign_in_bad_pw(driver)
    at_sign_in_no_pw(driver)
    at_sign_in_bad_user(driver)
    at_sign_in_no_user(driver)
    at_sign_in_good_user(driver)
    #at_keep_sign_in(driver)
    #at_make_new_account(driver, new_user, new_pw)
    #at_sign_into_new_account(driver, new_user, new_pw)
    at_make_new_class(driver)
    #at_make_new_resource(driver)
    #at_remove_resource(driver)
    #at_sign_out(driver)
    driver.quit()
