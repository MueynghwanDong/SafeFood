package com.ssafy.safefood.dto;

import java.security.Timestamp;

public class Qna {
	private int qnaid;
	private String title;
	private String content;
	private String qwritert;
	private Timestamp qregdata;
	private String awritert;
	private Timestamp aregdata;
	
	
	
	public int getQnaid() {
		return qnaid;
	}
	public void setQnaid(int qnaid) {
		this.qnaid = qnaid;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getQwritert() {
		return qwritert;
	}
	public void setQwritert(String qwritert) {
		this.qwritert = qwritert;
	}
	public Timestamp getQregdata() {
		return qregdata;
	}
	public void setQregdata(Timestamp qregdata) {
		this.qregdata = qregdata;
	}
	public String getAwritert() {
		return awritert;
	}
	public void setAwritert(String awritert) {
		this.awritert = awritert;
	}
	public Timestamp getAregdata() {
		return aregdata;
	}
	public void setAregdata(Timestamp aregdata) {
		this.aregdata = aregdata;
	}
	public Qna(int qnaid, String title, String content, String qwritert, Timestamp qregdata, String awritert,
			Timestamp aregdata) {
		
		this.qnaid = qnaid;
		this.title = title;
		this.content = content;
		this.qwritert = qwritert;
		this.qregdata = qregdata;
		this.awritert = awritert;
		this.aregdata = aregdata;
	}
	public Qna() {
	
	}

	
}
