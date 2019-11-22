package com.ssafy.safefood.contoller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.safefood.dto.Board;
import com.ssafy.safefood.dto.Member;
import com.ssafy.safefood.service.BoardService;
import com.ssafy.safefood.service.MemberService;

import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;

@RestController
@CrossOrigin
@RequestMapping("/api")
@Slf4j
public class FoodRestController {

	@Autowired
	BoardService bservice;

	@Autowired
	MemberService mservice;

	private ResponseEntity<Map<String, Object>> response(Object data, HttpStatus httpStatus, boolean status) {
		Map<String, Object> resultMap = new HashMap<>();
		resultMap.put("status", status);
		resultMap.put("data", data);
		// 상태와 함께 Map을 반환
		return new ResponseEntity<Map<String, Object>>(resultMap, httpStatus);
	}

	@GetMapping("/checkLogin/{id}")
	@ApiOperation(value = "멤버 조회", response = String.class)
	public ResponseEntity<Object> checkLogin(@PathVariable String id) throws Exception {
		log.trace("checkLogin");
		try {
			System.out.println(id);
			Member member = mservice.searchMember(id);
			System.out.println(member);
			if(member==null) {
				return new ResponseEntity<Object>(false, HttpStatus.CONFLICT);
			}else {
				return new ResponseEntity<Object>(true, HttpStatus.OK);
			}
			
			
		} catch (RuntimeException e) {
			log.error("checkLogin", e);
			throw e; //
		}
	}

	@GetMapping("/findAllBoard")
	@ApiOperation(value = "게시판 조회")
	public ResponseEntity<Object> findAllBoard() throws Exception {
		log.trace("findAllBoard");
		try {
			List<Board> boards = bservice.listAll();
			return new ResponseEntity<Object>(boards, HttpStatus.OK);
		} catch (RuntimeException e) {
			log.error("findAllBoard", e);
			throw e; //
		}
	}

	@GetMapping("/findDetailBoard/{bno}")
	@ApiOperation(value = "게시판 상세 조회", response = Integer.class)
	public ResponseEntity<Object> findDetailBoard(@PathVariable int bno) throws Exception {
		log.trace("findDetailBoard");
		try {
			Board b = bservice.read(bno);
			return new ResponseEntity<Object>(b, HttpStatus.OK);
		} catch (RuntimeException e) {
			log.error("findAllBoard", e);
			throw e; //
		}
	}

	@PostMapping("/Boardregist")
	@ApiOperation(value = "게시글 등록")
	public ResponseEntity<Object> addBoard(@RequestBody Board board) throws Exception {
		log.trace("Boardregist: {}", board);
		try {
			int c = bservice.regist(board);
			return new ResponseEntity<Object>(c, HttpStatus.OK);
		} catch (RuntimeException e) {
			log.error("Boardregist", e);
			throw e; //
		}
	}

	@DeleteMapping("/BoardDelete/{bno}")
	@ApiOperation(value = "게시글", response = Integer.class)
	public ResponseEntity<Object> deleteEmployee(@PathVariable int bno) throws Exception {
		log.trace("BoardDelete");
		try {
			int c = bservice.remove(bno);
			return new ResponseEntity<Object>(c, HttpStatus.OK);
		} catch (RuntimeException e) {
			log.error("deleteEmployee", e);
			throw e; //
		}
	}

	@PutMapping("/BoardUpdate")
	@ApiOperation(value = "정보 수정")
	public ResponseEntity<Object> updateBoard(@RequestBody Board board) throws Exception {
		log.trace("BoardUpdate");
		try {
			int c = bservice.modify(board);
			return new ResponseEntity<Object>(c, HttpStatus.OK);
		} catch (RuntimeException e) {
			log.error("updateEmployee", e);
			throw e; //
		}
	}
	
	@PutMapping("/BoardBUpdate")
	@ApiOperation(value = "정보 수정")
	public ResponseEntity<Object> bupdateBoard(@RequestBody Board board) throws Exception {
		log.trace("BoardBUpdate");
		try {
			int c = bservice.bmodify(board);
			return new ResponseEntity<Object>(c, HttpStatus.OK);
		} catch (RuntimeException e) {
			log.error("BoardBUpdate", e);
			throw e; //
		}
	}

}
