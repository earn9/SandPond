/*SpaceTode`

element Checker {
	default true
	check c (self, origin) => Math.random() < 0.1
	c@c => ._.
	
	c => _
}

`

print(Checker.behaveCode)*/

/*SpaceTode`

element Actioner {
	default true
	
	action {
		action {
			@_ => _$
		}
		
		action action action {
			@ => _
			_    $
		}
	}
	
	
	
}

`

print(Actioner.behaveCode)*/

/*SpaceTode`

element Maybeer {
	default true
	
	for(x) {
		maybe(0.2) @_ => _@
		
		@ => _
		_    @
		
		@ => _
		_    @
	}
}

`

print(Maybeer.behaveCode)*/

SpaceTode`

/*element Behaver {
	default true
	
	symbol B Behaver
	
	behave (origin, sites) => {
		if (Math.random() < 0.005) {
			SPACE.setAtom(origin, new Empty(), Empty)
			return false
		}
		return true
	}
	
	@ => .
	_    B
}*/

/*element Shifter {
	default true
	
	any(xyz.shifts) {
		 _ =>  @
		@     _
	}
}*/

/*element Red {
	colour "brown"
	
	symbol R Red
	symbol B Blue
	
	all(xy.directions) {
		@_ => @R    // Super Forkbomb
	}
	
	any(xy.directions) {
		@x => B.    // Turn blue when I touch the edge
		@B => B.    // Turn blue when I touch blue
	}
}

element Blue  {
	colour "blue"
	
	symbol R Red
	
	all(xy.directions) {
		@R => ..    // Do nothing if I touch red
	}
	
	@ => _    // Else, disappear
}*/

/*element _Lava {
	default true
	pour false
	
	symbol F Fire
	
	@ => _
	_    @
	
	action @_ => .F
	
}*/

`

